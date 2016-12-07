// Settings
const TIME_TO_PLACE_MEET_ME_MESSAGE = 2000;

// Div Names:

const DIV_FOR_GOOGLE_MAP_OF_WHERE_I_LIVE = '#googleMap';

// Positioning


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////









function sizeImageWithinContainer(imageID) {
  var image             = $(imageID),
      container         = image.parent(),
      containerHeight   = container.height(),
      containerWidth    = container.width(),
      imageStartHeight  = image.height(),
      imageStartWidth   = image.width(),
      isTooTallNotTooFat,
      shrinkMultiplier,
      imagePixelsFromLeft,
      imagePixelsFromTop,
      imageEndWidth,
      imageEndHeight;

  (containerHeight / imageStartHeight) < (containerWidth / imageStartWidth) ? isTooTallNotTooFat = true : isTooTallNotTooFat = false;

  if (isTooTallNotTooFat) {
    shrinkMultiplier = containerHeight / imageStartHeight;
    imageEndWidth = shrinkMultiplier * imageStartWidth;
    imageEndHeight = shrinkMultiplier * imageStartHeight;
    imagePixelsFromLeft = (containerWidth - imageEndWidth) / 2;
    imagePixelsFromTop = 0;
  } else {
    shrinkMultiplier = containerWidth / imageStartWidth;
    imageEndWidth = shrinkMultiplier * imageStartWidth;
    imageEndHeight = shrinkMultiplier * imageStartHeight;
    imagePixelsFromLeft = 0;
    imagePixelsFromTop = (containerHeight - imageEndHeight) / 2;
  }

  image.width(imageEndWidth);
  image.height(imageEndHeight);

  image.css({
    position: 'relative',
    left: imagePixelsFromLeft + 'px',
    top: imagePixelsFromTop + 'px',
  });



}



function setPageElements () {
  // Step 1) Hide No-JavaScript Div
  // Step 2) Set Google Map
  // Step 3) Size Photos



  // Step 2) Set Google Map


  // Step 3) Size Photos
  sizeImageWithinContainer('#tic-tac-toeRuby');

}






























// Set Divs Through Canvas /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function setMeetMeText() {
  var item      = $('#meet'),
      heyItem   = $('#hey'),
      heyItemYPosition = heyItem.position().top,
      heyItemBottomYPosition = heyItemYPosition + heyItem.height(),
      meetItemTopYPosition = heyItemBottomYPosition + 1.1 * maxCartoonHeightGlobalVariable;

  console.log(heyItemYPosition);
  console.log(heyItemBottomYPosition);
  console.log(maxCartoonHeightGlobalVariable);

  item.css({
    top: meetItemTopYPosition,
    left: '7%'
  });
}


function setMapAndMapText() {
  var text      = $('#heLivesHere'),
      mapFrame  = $('#googleMapFrame'),
      map       = $('#googleMap');

      text.fadeIn(2000);
      mapFrame.fadeIn(2000, function() {
        setOneDayText();
      });
      createGoogleMap();

      //map.css({
      //  visibility: 'visible'
      //});
}

function setOneDayText() {
  var oneDayText    = $('#oneDay'),
      meetMeText    = $('#meet'),
      meetMeBottom  = meetMeText.position().top + meetMeText.height(),
      oneDayYPosition  = meetMeBottom + oneDayText.height() * 0.75;
      oneDayText.css({
        top: oneDayYPosition,
        width: '100%',
        'text-align' : 'center',
        'left': '0%',
        'font-size': '1.8vw',
      });
      $('#oneDayTotally').css({
        'font-size': '150%',
        position: 'relative',
        top: '0.5vw',
      });
      $('#oneDayKickass').css({
        'font-size': '175%',
        position: 'relative',
        top: '1.25vw',
      });
      oneDayText.fadeIn(2000, function() {
        biographicalText();
      });

}

function biographicalText() {
  var bioText    = $('#biographicalText'),
      oneDayText    = $('#oneDay'),
      oneDayBottom  = oneDayText.position().top + oneDayText.height(),
      bioYPosition  = oneDayBottom + oneDayText.height() * 0.55;
      bioText.css({
        top: bioYPosition,
        width: '94%',
        right: '5%',
        'font-size': '1.8vw',
      });
      bioText.fadeIn(2000, function() {
        window.mode = 'moveToCrackTheCodingInterview';
      });

}

function setstudiesText() {
  var studiesText    = $('#studies'),
      studiesYPosition  = yCoordinateToPlaceStudiesDiv;
      studiesText.css({
        top: studiesYPosition,
        'font-size': '1.8vw',
        right: '5%',
        width: '93%'
      });
      studiesText.fadeIn(2000);

}





























var appAcademyLocation = new google.maps.LatLng(40.724948,-73.9989038);


function HomeControl(controlDiv, map, marker) {
  controlDiv.style.padding = '5px';
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.border='1px solid';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = "Send Julian to Work!";
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  controlText.style.fontFamily='Arial,sans-serif';
  controlText.style.fontSize='0.8vw';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.style.lineHeight = '11px';
  controlText.setAttribute("id", "sendMeToAppAcademyButton");

  if (userReadingLanguage == "english") {
    controlText.innerHTML = '<b>Send Julian<br/>to Work<b>';
  } else {
    controlText.innerHTML = "<b>Skicka Julian<br/>till Work<b>";
  }

  controlUI.appendChild(controlText);

  // Setup click-event listener: set the map to App Academy
  google.maps.event.addDomListener(controlUI, 'click', function() {
    console.log("this was clicked in maps!");
    marker.setPosition(appAcademyLocation);
    map.setCenter(appAcademyLocation);
  });

}



function createGoogleMap() {
  // code for button taken from http://www.w3schools.com/googleapi/tryit.asp?filename=tryhtml_map_controls_custom

  // Set Size of Google Map
  var googleMapWidth = 0.28 * $('#content').width(),
      googleMapHeight = googleMapWidth/2;


  $('#googleMap').css({
    width: String(googleMapWidth) + 'px',
    height: String(googleMapHeight) + 'px',
  });


  var mapDiv = document.getElementById('googleMap'),
      livingLocation = new google.maps.LatLng(40.741066,-74.030659);

  myGoogleMap = new google.maps.Map(mapDiv,{
      center: {lat: 40.741066, lng: -74.030659},
      mapTypeId: google.maps.MapTypeId.HYBRID,
      zoom: 11
    });

var marker=new google.maps.Marker({
  position: livingLocation,
  icon: googleIconMarkerPath
  });

marker.setMap(myGoogleMap);



  // Create a DIV to hold the control and call HomeControl()
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, myGoogleMap, marker);
//  homeControlDiv.index = 1;
  myGoogleMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);




}



















var headHightGlobalVariable,
    maxCartoonHeightGlobalVariable,
    canvasInitiated = false,
    faceHasBeenPlaced = false,
    bookMode = false,
    speechText = "",
    speechTextIsLeftOrRight = 1, // 1 for Left, -1 for  Right
    yCoordinateToCrackTheCodingInterview,
    yCoordinateToPlaceStudiesDiv,
    mode = '';


function createCanvas() {
  function sketchProc(processing) {
    // Override draw function, by default it will be called 60 times per second
    processing.frameRate(60);

      var bottomOfHey = $('#hey').position().top + $('#hey').height();

      console.log('hey Height');
      console.log($('#hey').height());

      // Start Settings
      processing.startArmRotationRight           = 44,
      processing.startArmRotationLeft            = 60;
      // Initializers


      processing.standardArmRotationRight = processing.startArmRotationRight; // rotates clockwise
      processing.standardArmRotationLeft  = processing.startArmRotationLeft;  // rotates counter-clockwise
      processing.headRadiusX              = 40;
      processing.centerOfHeadX            = $("#canvas1").width() * 0.10;
      processing.centerOfHeadY            = bottomOfHey + 3.25 * (processing.headRadiusX /1.1);
      processing.bookImage                = processing.loadImage("<%= asset_path('CrackingTheCodingInterview.jpg') %>");
      // Operations
      window.mode = 'armWaveIntro';
      processing.armWaveIntroCount = 0;




    processing.draw = function() {
        processing.background(0,0,0, 0.5);
        processing.size(  $('#canvas1').width(), $('#canvas1').height());


        // parameters
        var dialogueStr = window.speechText,
            sadFace     = false;

        if (!window.faceHasBeenPlaced && window.canvasInitiated) {
          window.faceHasBeenPlaced = true;
          processing.centerOfHeadX = $('#meet').position().left + (0.5 * $('#meet').width());
        }

        var standardArmRotationRight        = processing.standardArmRotationRight,
            standardArmRotationLeft         = processing.standardArmRotationLeft,
            centerOfHeadX                   = processing.centerOfHeadX,
            centerOfHeadY                   = processing.centerOfHeadY,
            headRadiusX                     = processing.headRadiusX;



        // Calculate Positions /////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////

            // Head
        var headRadiusY                 =headRadiusX /1.1,
            // Eyes
            sizeOfEyeComparedToHeadSize = 0.28,
            ratioOfEyeHeightToWidth     = 0.8,
            eyeDistanceFromCenterX      = 0.214 * headRadiusX,
            eyeDistanceFromCenterY      = headRadiusY * -0.117,
              // Left  Eye
              leftEyeX                  = centerOfHeadX - eyeDistanceFromCenterX,
              leftEyeY                  = centerOfHeadY + eyeDistanceFromCenterY,
              leftEyeWidth              = headRadiusX * sizeOfEyeComparedToHeadSize,
              leftEyeHeight             = leftEyeWidth * ratioOfEyeHeightToWidth,
              // Right Eye
              rightEyeX                 = centerOfHeadX + eyeDistanceFromCenterX,
              rightEyeY                 = leftEyeY,
              rightEyeWidth             = leftEyeWidth,
              rightEyeHeight            = leftEyeHeight,

            eyePupilHeightToHeightRatio = 0.75,
            eyePupilWidthtoWidthRatio     = 0.60,
            eyePupilYValue              = ((leftEyeY - 0.25 * (1-eyePupilHeightToHeightRatio) * leftEyeHeight) + leftEyeY)/2,
              // Left Eye Pupil
              leftEyePupilX             = leftEyeX,
              leftEyePupilY             = eyePupilYValue,
              leftEyePupilWidth         = leftEyeWidth * eyePupilWidthtoWidthRatio,
              leftEyePupilHeight        = leftEyeHeight * eyePupilHeightToHeightRatio,
              // Right Eye Pupil
              rightEyePupilX            = rightEyeX,
              rightEyePupilY            = leftEyePupilY,
              rightEyePupilWidth        = leftEyePupilWidth,
              rightEyePupilHeight       = leftEyePupilHeight,




            // Smile
            smileDistanceXFromCenterOfHead = headRadiusX * 0.35,
            smileDistanceYFromCenterOfHead = headRadiusY * 0.2,
            smileControlPointDistanceXFromCenterOfHead = headRadiusX * 0.2,
            smileControlPointDistanceYFromCenterOfHead = headRadiusY * 0.46,
            smileLeftX                  = centerOfHeadX - smileDistanceXFromCenterOfHead,
            smileLeftY                  = centerOfHeadY + smileDistanceYFromCenterOfHead,
            smileLeftControlPointX      = centerOfHeadX - smileControlPointDistanceXFromCenterOfHead,
            smileLeftControlPointY      = centerOfHeadY + smileControlPointDistanceYFromCenterOfHead,
            smileRightControlPointX     = centerOfHeadX + smileControlPointDistanceXFromCenterOfHead,
            smileRightControlPointY     = centerOfHeadY + smileControlPointDistanceYFromCenterOfHead,
            smileRightX                 = centerOfHeadX + smileDistanceXFromCenterOfHead,
            smileRightY                 = centerOfHeadY + smileDistanceYFromCenterOfHead,

            // Body
            bodyLength                  = headRadiusX * 0.67,
            bodyHeight                  = headRadiusY * 1.5,
            bodyX                       = centerOfHeadX - (0.5 * bodyLength),
            bodyY                       = centerOfHeadY + (headRadiusY * 0.54),
            bodyCornerCurves            = bodyLength * 0.1,

            // Neck
            neckX                       = centerOfHeadX - (headRadiusX * 0.25),
            neckY                       = centerOfHeadY + (headRadiusY * 0.45),
            neckLength                  = headRadiusX * 0.5,
            neckHeight                  = headRadiusY * 0.25,
            // Legs
             legXOffset                 = (bodyLength * 0.07),
             legHeightStandard          = bodyHeight * 0.85,
                // Left Leg
                leftLegLength           = bodyLength * 0.3,
                leftLegHeight           = legHeightStandard,

                leftLegX                = bodyX + (0.5 * bodyLength) - legXOffset - leftLegLength,
                leftLegY                = bodyY + bodyHeight,
                // Right Leg
                rightLegLength          = bodyLength * 0.3,
                rightLegHeight          = legHeightStandard,

                rightLegX               = (bodyX) + (0.5 * bodyLength) + (legXOffset),
                rightLegY               = bodyY + bodyHeight,

            // Arms
            armLength                   = headRadiusX * 1.03,
            armJointYDifference = (bodyHeight * 0.155),
                // Right Arm
                rightArmTopXRightStandard       = bodyX + bodyLength + (processing.cos(processing.radians(standardArmRotationRight)) * armLength),
                rightArmTopXLeftStandard        = bodyX + bodyLength,
                rightArmBottomXRightStandard    = rightArmTopXLeftStandard + (processing.cos(processing.radians(standardArmRotationRight)) * armLength),
                rightArmBottomXLeftStandard     = rightArmTopXLeftStandard,

                rightArmTopYLeftStandard        = bodyY + (0.2 * bodyHeight),
                rightArmTopYRightStandard       = rightArmTopYLeftStandard + (processing.sin(processing.radians(standardArmRotationRight)) * armLength),
                rightArmBottomYLeftStandard     = rightArmTopYLeftStandard + armJointYDifference,
                rightArmBottomYRightStandard    = rightArmBottomYLeftStandard + (processing.sin(processing.radians(standardArmRotationRight)) * armLength),
                // Left Arm
                leftArmTopXRightStandard        = bodyX,
                leftArmTopXLeftStandard         = leftArmTopXRightStandard - (processing.cos(processing.radians(standardArmRotationLeft)) * armLength),
                leftArmBottomXRightStandard     = bodyX,
                leftArmBottomXLeftStandard      = leftArmTopXRightStandard - (processing.cos(processing.radians(standardArmRotationLeft)) * armLength),

                leftArmTopYRightStandard        = bodyY + (0.2 * bodyHeight),
                leftArmTopYLeftStandard         = leftArmTopYRightStandard + (processing.sin(processing.radians(standardArmRotationLeft)) * armLength),

                leftArmBottomYRightStandard     = leftArmTopYRightStandard + armJointYDifference,
                leftArmBottomYLeftStandard      = leftArmBottomYRightStandard + (processing.sin(processing.radians(standardArmRotationLeft)) * armLength),
            // Hair
                hairThickness                   = headRadiusX / 5,
                // Hair Top
                HairTopStartDeg                 = 212,
                HairStopEndDeg                  = 350,

                hairTopCenterX                  = centerOfHeadX,
                hairTopCenterY                  = centerOfHeadY,
                hairTopWidth                    = headRadiusX * 1.2,
                hairTopHeight                   = headRadiusY *1.2,
            // Nose
            noseStartDeg                        = 64,
            noseEndDeg                          = 231,

            noseCenterX                         = centerOfHeadX,
            noseCenterY                         = centerOfHeadY + (headRadiusY * 0.1203125),
            noseWidth                           = headRadiusX * 0.28125,
            noseHeight                          = headRadiusY * 0.1546875,

            // Dialogue - Text Box - Speaking
                // Speech Line
                speechLineTopX                  = centerOfHeadX - (window.speechTextIsLeftOrRight) * ( 1.36 *headRadiusX),
                speechLineTopY                  = centerOfHeadY - ( 1.2 *headRadiusX),
                speechLineBottomX               = centerOfHeadX - (window.speechTextIsLeftOrRight) * ( 0.72 *headRadiusX),
                speechLineBottomY               = centerOfHeadY - ( -0.06  *headRadiusX),
                // Dialogue
                dialogueX                       = centerOfHeadX - (window.speechTextIsLeftOrRight) * ( 1.67 *headRadiusX),
                dialogueY                       = centerOfHeadY - ( 1.4 *headRadiusX),
                dialogueTextSize                = headRadiusX * (26/64),

            // Book
              // Dimensions: 350 x 500
            bookURL                             = processing.bookImage,
            bookWidth                           = headRadiusX * (2.2),
            bookHeight                          = bookWidth * (500/350),
            bookX                               = leftArmBottomXLeftStandard - bookWidth,
            bookY                               = leftArmBottomYLeftStandard - bookHeight;













      if (window.canvasInitiated) {









        // Operations //////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        // Arm Wave
        if (window.mode === 'armWaveIntro' && processing.armWaveIntroCount < 4) {
            if (processing.standardArmRotationRight < -53) {
                processing.handWavingUp = false;
                processing.armWaveIntroCount++;
            } else if (processing.standardArmRotationRight > 10) {
                processing.handWavingUp = true;
            }

            if (processing.handWavingUp) {
                processing.standardArmRotationRight -= 3;
            } else {
                processing.standardArmRotationRight += 3;
            }

        }
        // End Arm Wave
        if (window.mode === 'armWaveIntro' && processing.armWaveIntroCount >= 4) {
          if (window.userReadingLanguage == 'english') {
            window.speechText = 'Thanks for taking an interest in my coding projects!';
          } else {
            window.speechText = 'Tack för ditt intresse på mina kodnings projekt!';
          }
          if (processing.standardArmRotationRight === processing.startArmRotationRight) {
            window.mode = 'none';
            setMapAndMapText();
          }

          if (processing.standardArmRotationRight > processing.startArmRotationRight) {
            processing.standardArmRotationRight -= 3;
          } else {
            processing.standardArmRotationRight += 3;
          }

        }
        // Move to Crack the Coding Interview
        if (window.mode === 'moveToCrackTheCodingInterview') {
          window.yCoordinateToCrackTheCodingInterview = window.yCoordinateToCrackTheCodingInterview || $('#biographicalText').position().top + $('#biographicalText').height() + 3.25 * (processing.headRadiusX /1.1);
          if ( processing.centerOfHeadY < window.yCoordinateToCrackTheCodingInterview ) {
            processing.centerOfHeadY += 10;
            window.speechText = '';
          } else {
            window.speechTextIsLeftOrRight = -1;
            if (window.userReadingLanguage == 'english') {
              window.speechText = 'I should probably learn a programming language first...';
            } else {
              window.speechText = 'Jag borde lära mig JavaScript först...';
            }

            window.yCoordinateToPlaceStudiesDiv = leftLegY + leftLegHeight;
            window.bookMode = true;
            window.mode = true;
            setstudiesText();
          }
        }












        // Place Items /////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////


        processing.background(0, 0, 0, 0.5);
        processing.strokeWeight(1);
        processing.stroke(0, 0, 0);
        processing.smooth();



        // Neck
        processing.fill(240, 218, 218);
        processing.rect(neckX, neckY, neckLength, neckHeight);
        processing.fill(255, 255, 255);

        // Legs
        processing.fill(77, 65, 242);
        // Left Leg
        processing.rect(leftLegX, leftLegY, leftLegLength, leftLegHeight);
        // Right Leg
        processing.rect(rightLegX, rightLegY, rightLegLength, rightLegHeight);
        processing.fill(255, 255, 255);


        // Head
        processing.fill(254,216,193);
        processing.stroke(0, 0, 0);
        processing.ellipse(centerOfHeadX, centerOfHeadY, headRadiusX, headRadiusY);
        processing.fill(255, 255, 255);


        // Eyes
        processing.fill(248, 242, 255);
        processing.strokeWeight(0);
        // Left Eye
        processing.ellipse(leftEyeX, leftEyeY, leftEyeWidth, leftEyeHeight);
        // Right Eye
        processing.ellipse(rightEyeX, rightEyeY, rightEyeWidth, rightEyeHeight);
        processing.fill(5, 5, 5);
        // Left Eye Pupil
        processing.ellipse(leftEyePupilX, leftEyePupilY, leftEyePupilWidth, leftEyePupilHeight);
        // Right Eye Pupil
        processing.ellipse(rightEyePupilX, rightEyePupilY, rightEyePupilWidth, rightEyePupilHeight);
        processing.fill(255, 255, 255);
        processing.strokeWeight(1);


        // Mouth
        processing.strokeWeight(2);
        processing.fill(254,216,193);

        if (!sadFace) {
          // Happy Face
          processing.bezier(
            smileLeftX, smileLeftY,
            smileLeftControlPointX, smileLeftControlPointY,
            smileRightControlPointX, smileRightControlPointY,
            smileRightX, smileRightY
          );
        } else {
            // Sad Face
            processing.bezier(
              smileLeftControlPointX, smileLeftControlPointY,
              smileLeftX, smileLeftY,
              smileRightX, smileRightY,
              smileRightControlPointX, smileRightControlPointY
            );
        }
        processing.strokeWeight(1);
        processing.fill(255, 255, 255);


        // Body
        processing.fill(2, 212, 132);
        processing.rect(bodyX, bodyY, bodyLength, bodyHeight, bodyCornerCurves);
        processing.fill(255, 255, 255);


        // Arms
        processing.fill(158, 255, 171);
        // Right Arm
        processing.quad(
            rightArmTopXRightStandard, rightArmTopYRightStandard,
            rightArmTopXLeftStandard, rightArmTopYLeftStandard,
            rightArmBottomXLeftStandard, rightArmBottomYLeftStandard,
            rightArmBottomXRightStandard, rightArmBottomYRightStandard
            );
        // Left Arm
        processing.quad(
            leftArmTopXRightStandard, leftArmTopYRightStandard,
            leftArmTopXLeftStandard, leftArmTopYLeftStandard,
            leftArmBottomXLeftStandard, leftArmBottomYLeftStandard,
            leftArmBottomXRightStandard, leftArmBottomYRightStandard
            );
        processing.fill(255, 255, 255);

        // Nose
        processing.noFill();
        processing.arc(noseCenterX, noseCenterY, noseWidth, noseHeight, processing.radians(noseStartDeg), processing.radians(noseEndDeg));
        processing.fill(255, 255, 255);


        // Hair
        processing.noFill();
        processing.stroke(133, 67, 37);
        processing.strokeWeight(hairThickness);
        processing.arc(hairTopCenterX, hairTopCenterY, hairTopWidth, hairTopHeight, processing.radians(HairTopStartDeg), processing.radians(HairStopEndDeg));
        processing.strokeWeight(1);
        processing.stroke(0, 0, 0);
        processing.fill(255, 255, 255);



        // Dialogue
        if (dialogueStr !== "") {
            processing.fill(0, 0, 0);
            processing.strokeWeight(1);
            processing.line(speechLineTopX, speechLineTopY, speechLineBottomX, speechLineBottomY);
            processing.strokeWeight(1);
            processing.textSize(dialogueTextSize);
            processing.text(dialogueStr, dialogueX, dialogueY);
            processing.textSize(1);
            processing.fill(255, 255, 255);
        }

        // Book
        if(window.bookMode == true) {
            processing.image(bookURL, bookX, bookY, bookWidth, bookHeight);

        }

      }
      // After canvas-started if
      window.headHightGlobalVariable = processing.headRadiusX;
      window.maxCartoonHeightGlobalVariable = dialogueTextSize + (speechLineTopY - speechLineBottomY) + hairThickness + headRadiusY + neckHeight + bodyY + legHeightStandard;


    };

  }

  var canvas = document.getElementById("canvas1");
  // attaching the sketchProc function to the canvas
  var p = new Processing(canvas, sketchProc);
  // p.exit(); to detach it



}

























$(window).load(function() {

  // SET PAGE ELEMENTS ONTO DIV AS DESIGNED
  setPageElements();


  // Create Canvas
  createCanvas();

  // Hide Elements to Show Later
  $('#heLivesHere').hide();
  $('#googleMapFrame').hide();
  $('#oneDay').hide();
  $('#biographicalText').hide();
  $('#studies').hide();

  // Fade In Cartoon and Meet Me
  $('#meet').hide(function() {
    setMeetMeText();
  }).css({}).fadeIn(TIME_TO_PLACE_MEET_ME_MESSAGE, function() {
    canvasInitiated = true;
  });

});















 // Translations ///////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////

function setPageContentToEnglish() {
  console.log("This is English from the Content!");


  $('#hey').html("Hey!!");
  $('#meet').html("Meet Julian!");
  $('#heLivesHere').html("He Lives Here!");

  $('#andOneDayInOneDay').html("And he is definitely");
  $('#hesGoingToBeInOneDay').html("going to be a ");
  $('#oneDayTotally').html("totally");
  $('#oneDayKickass').html("kickass");
  $('#webDeveloperInOneDay').html("Django developer");

  $('#sendMeToAppAcademyButton').html("<b>Send Julian<br/>to Work<b>");
}

function setPageContentToSvenska() {
  console.log("Detta kommer från innehållet!");

  $('#hey').html("Hej!!");
  $('#meet').html("Träffa Julian!");
  $('#heLivesHere').html("Han Bor Här!");

  $('#andOneDayInOneDay').html("Och han är definitivt");
  $('#hesGoingToBeInOneDay').html("han <b>ska</b> bli en ");
  $('#oneDayTotally').html("totalt");
  $('#oneDayKickass').html("kickass");
  $('#webDeveloperInOneDay').html("Django webbutvecklare");

  $('#sendMeToAppAcademyButton').html("<b>Skicka Julian<br/>till Work<b>");
}

 // END Translations ///////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////
