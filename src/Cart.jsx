 import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCart, incrementCart, removeFromCart, clearCart, addOrder, getCurrentUser } from './store';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import QRCode from 'react-qr-code';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

function Cart() {
  const cartItems = useSelector(globalstate => globalstate.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

   // Check if user is logged in
  const user = getCurrentUser(); 

  // Cart states
  const [customerEmail, setCustomerEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [couponName, setCouponName] = useState('');
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const couponCodeRef = useRef();
  const [isCheckout, setIsCheckout] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [timeCount, setTimeCount] = useState(5);
  const [walletId, setWalletId] = useState('');

  // OTP states
  const [mobileNumber, setMobileNumber] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  // Countdown for thank you message and redirect
  useEffect(() => {
    if (thankYouMessage && timeCount > 0) {
      const timerId = setTimeout(() => {
        setTimeCount(timeCount - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (thankYouMessage && timeCount === 0) {
      setShowConfetti(false);
      navigate('/Orders');
    }
  }, [thankYouMessage, timeCount, navigate]);

  // OTP generation function
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send OTP handler
  const handleSendOtp = () => {
    // Validate mobile number: 10 digits, numeric
    if (!/^\d{10}$/.test(mobileNumber)) {
      setOtpMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setOtpSent(true);
    setOtpMessage('OTP sent to your mobile number.');

    console.log(`Generated OTP for ${mobileNumber}: ${otp}`);  // Simulate SMS
  };

  // Verify OTP handler
  const handleVerifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setOtpMessage('✅ OTP Verified Successfully!');
      setOtpSent(false);
      setGeneratedOtp(null);
      setEnteredOtp('');
      setMobileNumber('');
    } else {
      setOtpMessage('❌ Incorrect OTP. Please try again.');
    }
  };

  const handleCompletePurchase = () => {
     // Check if user is logged in
    if (!user) {
      alert("You must be logged in to complete the payment.");
      navigate('/register'); // Redirect to Register page
      return;
    }

    if (!customerEmail) {
      alert('Please enter your email to receive order details.');
      return;
    }

    if (!isConfirmed) {
      alert('Please confirm your payment method.');
      return;
    }
    if (!customerEmail) {
      alert('Please enter your email to receive order details.');
      return;
    }
    if (!isConfirmed) {
      alert('Please confirm your payment method.');
      return;
    }
    // Optionally, check OTP verification if you want to ensure OTP verified first

    setIsCheckout(true);
    setShowConfetti(true);
    setThankYouMessage(true);
    setTimeCount(5);

    const purchaseDate = new Date().toLocaleString();

    let purchaseDetails = {
      date: purchaseDate,
      id: `${Date.now()}`,
      items: [...cartItems], 
      finalPrice: finalPrice
    };

  const templateParams = {
      order_id: purchaseDetails.id,
      email: customerEmail,
       date: purchaseDate, 
      orders: purchaseDetails.items.map(item => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity,
         
      })),
      cost: {
        shipping:50,
        tax: tax.toFixed(2),
        discount: discountAmount.toFixed(2),
        couponcode: couponName || "None",
        coupon_discount: couponDiscountAmount.toFixed(2),
        total: finalPrice.toFixed(2)
      }
  };


    emailjs.send(
      'service_juhmhtg', // Your actual Service ID
      'template_ux9fbxo', // Your actual Template ID
      templateParams,
      'arqeYfla8Jbxttsnw' // Your Public Key
    )
      .then((response) => {
        alert('✅ Email successfully sent!', response.status, response.text);
      })
      .catch((error) => {
        alert('❌ Failed to send email:', error);
      });

    dispatch(clearCart());
    dispatch(addOrder(purchaseDetails));
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setIsConfirmed(false);
  };

  const handlingCouponPer = () => {
    const couponCode = couponCodeRef.current.value.trim().toUpperCase();
    setCouponName(couponCode);

    switch (couponCode) {
      case 'RATAN10':
        setCouponCodeDiscountPer(10);
        break;
      case 'RATAN20':
        setCouponCodeDiscountPer(20);
        break;
      case 'RATAN30':
        setCouponCodeDiscountPer(30);
        break;
      default:
        alert('Invalid coupon code');
        setCouponCodeDiscountPer(0);
    }
  };

  const calculatingAmount = () => {
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = (totalPrice * discount) / 100;
    let priceAfterDiscount = totalPrice - discountAmount;

    const couponDiscountAmount = (priceAfterDiscount * couponCodeDiscountPer) / 100;
    priceAfterDiscount -= couponDiscountAmount;

    const tax = priceAfterDiscount * 0.05;
    const finalPrice = priceAfterDiscount + tax;

    return { totalPrice, discountAmount, couponDiscountAmount, priceAfterDiscount, tax, finalPrice };
  };

  const { totalPrice, discountAmount, couponDiscountAmount, priceAfterDiscount, tax, finalPrice } = calculatingAmount();

  return (
    <>
    <ToastContainer position='top-right' autoClose={3000}/>
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      <div className="cart-container">
        <h2>🛒 Your Cart</h2>

        {isCheckout ? (
          <p class="empty-cart-message">⚠️Your cart is empty.</p>
        ) : (
          <>
            {cartItems.length === 0 ? (
             <p class="empty-cart-message">⚠️Your cart is empty.</p>
            ) : (
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td><img src={item.image} alt={item.name} /></td>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.price * item.quantity}</td>
                      <td>
                        <button className="btn increment-btn" onClick={() => dispatch(incrementCart(item))}>+</button>
                        <button className="btn decrement-btn" onClick={() => dispatch(decrementCart(item))}>-</button>
                        <button className="btn remove-btn" onClick={() => {dispatch(removeFromCart(item)); toast.error("Your item is removed")}}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>

      {!isCheckout && cartItems.length > 0 && (
        <div className="pricing-container">
          <h2>Your Total Price: ₹{totalPrice.toFixed(2)}</h2>
          <div>
            <button className="small-btn" onClick={() => setDiscount(10)}>Apply 10% Discount</button>
            <button className="small-btn" onClick={() => setDiscount(20)}>Apply 20% Discount</button>
            <button className="small-btn" onClick={() => setDiscount(30)}>Apply 30% Discount</button>
          </div>
          <h2>Discount ({discount}%): ₹{discountAmount.toFixed(2)}</h2>
          <input ref={couponCodeRef} className="coupon-input" placeholder="Enter Coupon Code" />
          <button className="small-btn" onClick={handlingCouponPer}>Apply Coupon</button>
          <h2>Coupon {couponName}: ₹{couponDiscountAmount.toFixed(2)}</h2>
          <h2>Tax (5%): ₹{tax.toFixed(2)}</h2>
          <h2>Final Price: ₹{finalPrice.toFixed(2)}</h2>

          <div className="email-section">
            <h4>📧 Enter your email to receive the order details:</h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="email-input"
            />
          </div>

          {/* OTP Section */}
          <div className="otp-section" style={{ marginTop: '20px' }}>
            <h4>📱 Verify Mobile Number</h4>
            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              style={{ width: '100%', padding: '8px', marginBottom: '8px', fontSize: '16px' }}
            />
            {!otpSent ? (
              <button
                onClick={handleSendOtp}
                className="small-btn"
                style={{ marginBottom: '12px' }}
              >
                Send OTP
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  maxLength={6}
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                  style={{ width: '100%', padding: '8px', marginBottom: '8px', fontSize: '16px' }}
                />
                <button
                  onClick={handleVerifyOtp}
                  className="small-btn"
                  style={{ marginBottom: '12px' }}
                >
                  Verify OTP
                </button>
              </>
            )}
            {otpMessage && (
              <p style={{ color: otpMessage.startsWith('✅') ? 'green' : 'red' }}>
                {otpMessage}
              </p>
            )}
          </div>

          <div className="payment-method" style={{ marginTop: '20px' }}>
            <h3>Select Payment Method:</h3>
            <button className="small-btn" onClick={() => handlePaymentMethodSelect('qr')}>QR CODE</button>
            <button className="small-btn" onClick={() => handlePaymentMethodSelect('card')}>CARD</button>
            <button className="small-btn" onClick={() => handlePaymentMethodSelect('wallet')}>WALLET</button>
          </div>

          {paymentMethod === 'qr' && (
            <div className="qr-section">
              <h4>Scan UPI QR to pay &#8377;{finalPrice.toFixed(2)}</h4>
              <QRCode value={`upi://pay?pa=mangi.mahesh@ybl&pn=MaheshStore&am=${finalPrice.toFixed(2)}&cu=INR`} />
              <p>UPI ID: mangi.mahesh@ybl</p>
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="card-section p-4 bg-light rounded shadow-sm animate__animated animate__fadeIn">
              <h4 className="text-center text-primary mb-4">Pay ₹{finalPrice.toFixed(2)}</h4>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Card Number" maxLength="16" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Cardholder Name" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <input type="text" className="form-control w-48" placeholder="Expiry Date (MM/YY)" maxLength="5" />
                <input type="text" className="form-control w-48" placeholder="CVV" maxLength="3" />
              </div>
              <button className="btn btn-success w-100">Pay Now</button>
            </div>
          )}

          {paymentMethod === 'wallet' && (
            <div className="wallet-section p-4 bg-light rounded shadow-sm animate__animated animate__fadeIn">
              <h4>Enter Wallet ID</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Wallet ID"
                value={walletId}
                onChange={(e) => setWalletId(e.target.value)}
              />
            </div>
          )}

          {paymentMethod && (
            <div className="confirmation-section" style={{ marginTop: '12px' }}>
              <input
                type="checkbox"
                id="confirm"
                checked={isConfirmed}
                onChange={() => setIsConfirmed(!isConfirmed)}
              />
              <label htmlFor="confirm">Confirm Payment Method</label>
            </div>
          )}

          {isConfirmed && (
            <button className="complete-payment-btn small-btn" onClick={handleCompletePurchase} style={{ marginTop: '16px' }}>
              Complete Payment
            </button>
          )}

          {thankYouMessage && (
            <div>
              <h3 className="thank-you-message" style={{ marginTop: '16px' }}>
                Thank you for your purchase! Redirecting in {timeCount} second{timeCount !== 1 ? 's' : ''}...
              </h3>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
