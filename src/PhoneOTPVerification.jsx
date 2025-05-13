import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const firebaseConfig = {
  apiKey: 'AIzaSyAPUKEHv38xAJPMTO2iJXmfuJaWucio44E',
  authDomain: 'food-app-b4c2c.firebaseapp.com',
  projectId: 'food-app-b4c2c',
  storageBucket: 'food-app-b4c2c.appspot.com',
  messagingSenderId: '1016883177002',
  appId: '1:1016883177002:web:9cb7e2346177de5d500553',
  measurementId: 'G-M8FY0G1G9D'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const PhoneOTPVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            console.log('Recaptcha verified');
          },
          'error-callback': (err) => {
            console.error('Recaptcha error:', err);
          }
        },
        auth
      );
    }
  };

  const handleSendOtp = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        alert('OTP sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        alert('Error sending OTP. Check console for more details.');
      });
  };

  const handleVerifyOtp = () => {
    if (verificationId && otp) {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      auth.signInWithCredential(credential)
        .then(() => {
          setIsVerified(true);
          alert('Phone number verified successfully!');
        })
        .catch((error) => {
          console.error('Error verifying OTP:', error);
          alert('Invalid OTP. Please try again.');
        });
    }
  };

  return (
     <div className="p-4 bg-gradient-to-r from-blue-300 to-green-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Phone OTP Verification</h2>
        {!isVerified ? (
          <>
            <div className="mb-4">
              <PhoneInput
                country={'us'}
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Enter phone number"
                inputStyle={{ width: '100%', padding: '10px', borderRadius: '8px' }}
              />
            </div>
            <div id="recaptcha-container"></div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4 hover:bg-blue-600"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>

            <div className="mt-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="border p-2 rounded-lg w-full mb-2"
              />
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </div>
          </>
        ) : (
          <div className="text-green-600 font-bold text-center">Phone number verified successfully!</div>
        )}
      </div>
    </div>
  );
};

export default PhoneOTPVerification;