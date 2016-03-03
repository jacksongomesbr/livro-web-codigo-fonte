'use strict';

angular.module('phonecat', [])
    .controller('Home', function($scope) {
        $scope.telefones = [
{
    "additionalFeatures": "Front Facing 1.3MP Camera", 
    "android": {
        "os": "Android 2.2", 
        "ui": "Dell Stage"
    }, 
    "availability": [
        "T-Mobile"
    ], 
    "battery": {
        "standbyTime": "", 
        "talkTime": "", 
        "type": "Lithium Ion (Li-Ion) (2780 mAH)"
    }, 
    "camera": {
        "features": [
            "Flash", 
            "Video"
        ], 
        "primary": "5.0 megapixels"
    }, 
    "connectivity": {
        "bluetooth": "Bluetooth 2.1", 
        "cell": "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz", 
        "gps": true, 
        "infrared": false, 
        "wifi": "802.11 b/g"
    }, 
    "description": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans", 
    "display": {
        "screenResolution": "WVGA (800 x 480)", 
        "screenSize": "7.0 inches", 
        "touchScreen": true
    }, 
    "hardware": {
        "accelerometer": true, 
        "audioJack": "3.5mm", 
        "cpu": "nVidia Tegra T20", 
        "fmRadio": false, 
        "physicalKeyboard": false, 
        "usb": "USB 2.0"
    }, 
    "id": "dell-streak-7", 
    "images": [
        "img/phones/dell-streak-7.0.jpg", 
        "img/phones/dell-streak-7.1.jpg", 
        "img/phones/dell-streak-7.2.jpg", 
        "img/phones/dell-streak-7.3.jpg", 
        "img/phones/dell-streak-7.4.jpg"
    ], 
    "name": "Dell Streak 7", 
    "sizeAndWeight": {
        "dimensions": [
            "199.9 mm (w)", 
            "119.8 mm (h)", 
            "12.4 mm (d)"
        ], 
        "weight": "450.0 grams"
    }, 
    "storage": {
        "flash": "16000MB", 
        "ram": "512MB"
    }
},
{
    "additionalFeatures": "Gorilla Glass display, Dedicated Camera Key, Ring Silence Switch, Swype keyboard.", 
    "android": {
        "os": "Android 2.2", 
        "ui": "Dell Stage"
    }, 
    "availability": [
        "AT&T,", 
        "KT,", 
        "T-Mobile"
    ], 
    "battery": {
        "standbyTime": "400 hours", 
        "talkTime": "7 hours", 
        "type": "Lithium Ion (Li-Ion) (1400 mAH)"
    }, 
    "camera": {
        "features": [
            "Flash", 
            "Video"
        ], 
        "primary": "8.0 megapixels"
    }, 
    "connectivity": {
        "bluetooth": "Bluetooth 2.1", 
        "cell": "850/1900/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE\n900/1700/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE", 
        "gps": true, 
        "infrared": false, 
        "wifi": "802.11 b/g/n"
    }, 
    "description": "The Venue is the perfect one-touch, Smart Phone providing instant access to everything you love. All of Venue's features make it perfect for on-the-go students, mobile professionals, and active social communicators who love style and performance.\n\nElegantly designed, the Venue offers a vibrant, curved glass display that\u2019s perfect for viewing all types of content. The Venue\u2019s slender form factor feels great in your hand and also slips easily into your pocket.  A mobile entertainment powerhouse that lets you download the latest tunes from Amazon MP3 or books from Kindle, watch video, or stream your favorite radio stations.  All on the go, anytime, anywhere.", 
    "display": {
        "screenResolution": "WVGA (800 x 480)", 
        "screenSize": "4.1 inches", 
        "touchScreen": true
    }, 
    "hardware": {
        "accelerometer": true, 
        "audioJack": "3.5mm", 
        "cpu": "1 Ghz processor", 
        "fmRadio": false, 
        "physicalKeyboard": false, 
        "usb": "USB 2.0"
    }, 
    "id": "dell-venue", 
    "images": [
        "img/phones/dell-venue.0.jpg", 
        "img/phones/dell-venue.1.jpg", 
        "img/phones/dell-venue.2.jpg", 
        "img/phones/dell-venue.3.jpg", 
        "img/phones/dell-venue.4.jpg", 
        "img/phones/dell-venue.5.jpg"
    ], 
    "name": "Dell Venue", 
    "sizeAndWeight": {
        "dimensions": [
            "64.0 mm (w)", 
            "121.0 mm (h)", 
            "12.9 mm (d)"
        ], 
        "weight": "164.0 grams"
    }, 
    "storage": {
        "flash": "1000MB", 
        "ram": "512MB"
    }
},
{
    "additionalFeatures": "Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget", 
    "android": {
        "os": "Android 2.2", 
        "ui": ""
    }, 
    "availability": [
        "Verizon"
    ], 
    "battery": {
        "standbyTime": "230 hours", 
        "talkTime": "8 hours", 
        "type": "Lithium Ion (Li-Ion) (1400 mAH)"
    }, 
    "camera": {
        "features": [
            "Flash", 
            "Video"
        ], 
        "primary": "5.0 megapixels"
    }, 
    "connectivity": {
        "bluetooth": "Bluetooth 2.1", 
        "cell": "WCDMA 850/1900/2100, CDMA 800/1900, GSM 850/900/1800/1900, HSDPA 10.2 Mbps (Category 9/10), CDMA EV-DO Release A, EDGE Class 12, GPRS Class 12, HSUPA 1.8 Mbps", 
        "gps": true, 
        "infrared": false, 
        "wifi": "802.11 b/g/n"
    }, 
    "description": "With Quad Band GSM, the DROID 2 Global can send email and make and receive calls from more than 200 countries. It features an improved QWERTY keyboard, super-fast 1.2 GHz processor and enhanced security for all your business needs.", 
    "display": {
        "screenResolution": "FWVGA (854 x 480)", 
        "screenSize": "3.7 inches", 
        "touchScreen": true
    }, 
    "hardware": {
        "accelerometer": true, 
        "audioJack": "3.5mm", 
        "cpu": "1.2 GHz TI OMAP", 
        "fmRadio": false, 
        "physicalKeyboard": true, 
        "usb": "USB 2.0"
    }, 
    "id": "droid-2-global-by-motorola", 
    "images": [
        "img/phones/droid-2-global-by-motorola.0.jpg", 
        "img/phones/droid-2-global-by-motorola.1.jpg", 
        "img/phones/droid-2-global-by-motorola.2.jpg"
    ], 
    "name": "DROID\u2122 2 Global by Motorola", 
    "sizeAndWeight": {
        "dimensions": [
            "60.5 mm (w)", 
            "116.3 mm (h)", 
            "13.7 mm (d)"
        ], 
        "weight": "169.0 grams"
    }, 
    "storage": {
        "flash": "8192MB", 
        "ram": "512MB"
    }
},
{
    "additionalFeatures": "Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget", 
    "android": {
        "os": "Android 2.2", 
        "ui": ""
    }, 
    "availability": [
        "Verizon"
    ], 
    "battery": {
        "standbyTime": "330 hours", 
        "talkTime": "7 hours", 
        "type": "Lithium Ion (Li-Ion) (1400 mAH)"
    }, 
    "camera": {
        "features": [
            "Flash", 
            "Video"
        ], 
        "primary": "5.0 megapixels"
    }, 
    "connectivity": {
        "bluetooth": "Bluetooth 2.1", 
        "cell": "800/1900 CDMA EVDO Rev. A with dual diversity antenna, 850/900/1800/1900MHz GSM, GPRS Class 12, EDGE Class 12, 850/1900/2100 WCDMA (category 9/10), HSDPA 10.2mbps, HSUPA 1.8 mbps", 
        "gps": true, 
        "infrared": false, 
        "wifi": "802.11 b/g/n"
    }, 
    "description": "Access your work directory, email or calendar with DROID Pro by Motorola., an Android-for-business smartphone with corporate-level security. It features both a QWERTY keyboard and touchscreen, a speedy 1 GHz processor and Adobe\u00ae Flash\u00ae Player 10.", 
    "display": {
        "screenResolution": "HVGA (480 x 320)", 
        "screenSize": "3.1 inches", 
        "touchScreen": true
    }, 
    "hardware": {
        "accelerometer": true, 
        "audioJack": "3.5mm", 
        "cpu": "1 GHz TI OMAP", 
        "fmRadio": false, 
        "physicalKeyboard": true, 
        "usb": "USB 2.0"
    }, 
    "id": "droid-pro-by-motorola", 
    "images": [
        "img/phones/droid-pro-by-motorola.0.jpg", 
        "img/phones/droid-pro-by-motorola.1.jpg"
    ], 
    "name": "DROID\u2122 Pro by Motorola", 
    "sizeAndWeight": {
        "dimensions": [
            "61.0 mm (w)", 
            "119.0 mm (h)", 
            "11.7 mm (d)"
        ], 
        "weight": "134.0 grams"
    }, 
    "storage": {
        "flash": "2048MB", 
        "ram": "512MB"
    }
},
{
    "additionalFeatures": "Accessibility features: Tactile QWERTY keyboard, four-direction keypad, start and end call buttons, dedicated number keys, camera button, TalkBack screen reader", 
    "android": {
        "os": "Android 2.1", 
        "ui": "LG Home"
    }, 
    "availability": [
        "Cellular South"
    ], 
    "battery": {
        "standbyTime": "500 hours", 
        "talkTime": "8 hours", 
        "type": "Lithium Ion (Li-Ion) (1500 mAH)"
    }, 
    "camera": {
        "features": [
            "Flash", 
            "Video"
        ], 
        "primary": "3.0 megapixels"
    }, 
    "connectivity": {
        "bluetooth": "Bluetooth 2.1", 
        "cell": "1.9 GHz CDMA PCS, 800 MHz CDMA, EVDO Rev. A, 1xRTT", 
        "gps": true, 
        "infrared": false, 
        "wifi": "802.11 b/g"
    }, 
    "description": "Android plus QWERTY is a powerful duo. LG Axis melds a speedy UI with the limitless micro-entertainment of 80,000+ apps including voice-activated Google. Feel the tactile vibration on its tempered glass touchscreen. Take the fuzziness out of your fun with a 3.2MP camera that does 360\u00b0 panoramics. And customize your home screens with shortcuts to your apps, favorites, and widgets. It's the centerpiece of your life.", 
    "display": {
        "screenResolution": "WVGA (800 x 480)", 
        "screenSize": "3.2 inches", 
        "touchScreen": true
    }, 
    "hardware": {
        "accelerometer": true, 
        "audioJack": "", 
        "cpu": "600 MHz Qualcomm MSM7627", 
        "fmRadio": false, 
        "physicalKeyboard": true, 
        "usb": "USB 2.0"
    }, 
    "id": "lg-axis", 
    "images": [
        "img/phones/lg-axis.0.jpg", 
        "img/phones/lg-axis.1.jpg", 
        "img/phones/lg-axis.2.jpg"
    ], 
    "name": "LG Axis", 
    "sizeAndWeight": {
        "dimensions": [
            "56.0 mm (w)", 
            "116.0 mm (h)", 
            "16.0 mm (d)"
        ], 
        "weight": "158.0 grams"
    }, 
    "storage": {
        "flash": "126MB", 
        "ram": "256MB"
    }
}        
        ];
        
        $scope.orderProp = 'android.os';
        
    });