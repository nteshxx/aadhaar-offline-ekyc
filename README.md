# aadhar-offline-ekyc

Aadhaar Paperless Offline e-KYC eliminates the need for the resident to provide photo copy of Aadhaar letter and instead resident can download the KYC XML and provide the same to agencies wanted to have his/her KYC. The agency can verify the KYC details shared by the resident in a manner explained in below sections. The KYC details is in machine readable XML which is digitally signed by UIDAI allowing agency to verify its authenticity and detect any tampering.

## How to share Aadhaar Paperless Offline e-KYC Data
Aadhaar Paperless Offline e-KYC data may be provided to the verifying agency by the Aadhaar number holder in digital or physical format along with share phrase

## XML Validation steps :
* 1. Aadhaar Paperless Offline e-KYC XML is zipped and protected with the “Share Phrase”. It can be unzipped using any standard unzipping utility (like WinZip, WinRaR, 7Zip etc.). While unzipping, a prompt will show for password where “Share Phrase” should be entered.

* 2. Parse the XML and use the logic mentioned earlier to validate the digital signature.

* 3. Optionally do OTP validation against the mobile number (resident needs to provide mobile number which can be hashed and verified against the KYC data) and/or do face validation by capturing face and matching against the photo within the e-KYC XML.
