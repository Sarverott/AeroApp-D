# TODO:
  1. HTML skeleton of app
    1.1. head.html module
    1.2. cards modules
      1.2.1 main
      1.2.2 participants
      1.2.3 peers
      1.2.4 solo - women competition
      1.2.5 solo - men competition
      1.2.6 threes
      1.2.7 universities
    1.3. modals modules
      1.3.1 editors
        1.3.1.1 participant
        1.3.1.2 university
        1.3.1.3 coach
        1.3.1.4 competitions
          1.3.1.4.1 peers
          1.3.1.4.2 solo - men
          1.3.1.4.3 solo - women
          1.3.1.4.4 threes
      1.3.2 error
      1.3.3 info
      1.3.4 print
      1.3.5 points from judges
      1.3.6 leadboard display
      1.3.7 settings
    1.4. loading screen
  2. CSS stylization
  3. JavaScript mechanics
    3.1. 
  4. pre-release testing
  5. Debuging
  6. Release
  7. post-release collecting data from users
PSEUDOCODE:
  1. dashboard
    1.1 header
      1.1.1 create skeleton
      1.1.2 add stylization of dashboard look
      1.1.3 buttons of sections, after click leading to section
  2. language mechanics
    2.1 loading translated text from json file with shortcut of selected language and pasting to correct spots
  3. load modules from files
    3.1 after clicking header section buttons load content of section file, in 'cards' directory
NOTES:
  DESIGN:
    1. appname
    2. mascots
      2.1 list
        -mascot A [] - female, gymnast
        -mascot B [] - male, gymnast
        -mascot C [] - female, gymnast
        -mascot D [] - female, gymnast
        -mascot E [] - female, coach
        -mascot F [], G [], H [], I [], J [] - various, judges
      2.2 mascots' assignation to competitions
        -main: F,G,H,I,J
        -participants: A, B, C, D
        -peers: A, B
        -solo - woman competition: A
        -solo - man competition: B
        -threes: A, C, D
        -universities: E
      2.3
