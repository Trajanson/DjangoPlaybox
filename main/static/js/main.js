// SETTINGS ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Global Scope Variables
var userReadingLanguage = 'english';

// Div Names:

const DIV_TO_SHOW_IF_USER_DOES_NOT_HAVE_JAVASCRIPT = '#no-javascript';
const DIV_TO_TRANSLATE_PAGE_TO_ENGLISH = '#englishFlag';
const DIV_TO_TRANSLATE_PAGE_TO_SVENSKA = '#swedishFlag';

const DIV_WITH_MEET_ME_MENU_TEXT = '#MeetMeMenu';
const DIV_WITH_ALL_PROJECTS_MENU_TEXT = '#AllProjectsMenu';
const DIV_WITH_RUBY_PROJECTS_MENU_TEXT = '#RubyProjectsMenu';
const DIV_WITH_RAILS_PROJECTS_MENU_TEXT = '#RailsProjectsMenu';
const DIV_WITH_JAVASCRIPT_PROJECTS_MENU_TEXT = '#JavaScriptProjectsMenu';











// OPERATIONS ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


function hideNoJavaScriptDiv() {
  $(DIV_TO_SHOW_IF_USER_DOES_NOT_HAVE_JAVASCRIPT).hide();
}



 // Translations ///////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////

function translateMenuToEnglish() {
  $(DIV_WITH_MEET_ME_MENU_TEXT).html('Meet Julian!');
  $(DIV_WITH_ALL_PROJECTS_MENU_TEXT).html('Portfolio Page');
  $(DIV_WITH_RUBY_PROJECTS_MENU_TEXT).html("&nbsp;&nbsp;&nbsp;&nbsp;Ruby Projects");
  $(DIV_WITH_RAILS_PROJECTS_MENU_TEXT).html('&nbsp;&nbsp;&nbsp;&nbsp;Rails Projects');
  $(DIV_WITH_JAVASCRIPT_PROJECTS_MENU_TEXT).html('&nbsp;&nbsp;&nbsp;&nbsp;JavaScript Projects');

}

function translateMenuToSvenska() {
  $(DIV_WITH_MEET_ME_MENU_TEXT).html('Träffa Julian!');
  $(DIV_WITH_ALL_PROJECTS_MENU_TEXT).html('Alla Projekt');
  $(DIV_WITH_RUBY_PROJECTS_MENU_TEXT).html("&nbsp;&nbsp;&nbsp;&nbsp;Ruby Projekt");
  $(DIV_WITH_RAILS_PROJECTS_MENU_TEXT).html('&nbsp;&nbsp;&nbsp;&nbsp;Rails Projekt');
  $(DIV_WITH_JAVASCRIPT_PROJECTS_MENU_TEXT).html('&nbsp;&nbsp;&nbsp;&nbsp;JavaScript Projekt');
}

 // END Translations ///////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////


$(window).load(function() {
  // Step 1) Hide No-JavaScript Div
  hideNoJavaScriptDiv();

  // Step 2) Set Event Listeners for Language Translations
  $(DIV_TO_TRANSLATE_PAGE_TO_ENGLISH).click(function() {
    if (userReadingLanguage !== 'english') {
      userReadingLanguage = 'english';
      translateMenuToEnglish();

    if (typeof setPageContentToEnglish === 'function') {
      setPageContentToEnglish();
    }


      console.log("Hey!");
    }
  });

  $(DIV_TO_TRANSLATE_PAGE_TO_SVENSKA).click(function() {
    if (userReadingLanguage !== 'svenska') {
      userReadingLanguage = 'svenska';
      translateMenuToSvenska();

    if (typeof setPageContentToSvenska === 'function') {
      setPageContentToSvenska();
    }

      console.log("Hur är det?!");
    }  });

});
