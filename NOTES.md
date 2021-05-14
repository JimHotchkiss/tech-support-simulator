# 4/16/2021
    [x] Project layout
        (x) File structure
        (x) Landing page
    [x] Render 1688 GUI  
        (x) Option selector
        (x) Clear 1688 GUI - dev
# 4/21/2021
    [] Check GUI ratios - assure accurate representation
    [X] Render feature sections
        (x) Specialties
        (x) Camera functionality buttons
        (x) Autolight and Defog
    [X] Implement specialty carosoul
        (x) Insert necessary HTML
            (x) Insert left arrow
            (x) Specialty window
            (x) Insert right arrow
            (x) Render arrow images
                (x) Insert onclick functionality
        (x) Define specialties array
        (x) Render specialties 
        (x) Render dots container
            (x) span for each dot
                (x) onClick for each dot
# 4/22/2021
    [-] Implement specialty dot functionality (when user clicks a dot, the specialty window correctly updates.)
        * I don't think, on the actually 1688 CCU, that the dots have any functionality. Hold off on building this.
    [X] Render camera feature (WB, image, record)
        * ccu-functions-container
        (x) WB container
        (x) Image container
            (x) Image div
        (x) Recording container
            (x) Recording div
    [x] Render Defog and Autolight features
        (x) Defog container 
            (x) Img div
        (x) Autolight container 
            (x) Img div
            (x) Text div
# 4/23/2021
    [X] Clear HTML when user selects a different option (Home, AIM, Settings)
        () AIM
            (x) Clear current view html
            (x) Render AIM screen
                (x) Aim home container
                (x) Aim title container
                    (x) Aim title div 
                (x) Aim modality container 
                    (x) Aim left arrow
                    (x) Aim modality screen
                    (x) Aim right arrow
                    (x) Aim modality array
                    (x) Load modality array data
                    (x) Load modality dot spands
                    (x) Modality carousel
            () Render Gain Brightness
                    () Gain container 
                        () Gain plus
                        () Gain window
                        () Gain minus
    [] Text Modal 
        () Defog 
        () Autolight
# 4/28/2021
        () AIM
            (x) Clear current view html
            (x) Render AIM screen
                (x) Aim home container
                (x) Aim title container
                    (x) Aim title div 
                (x) Aim modality container 
                    (x) Aim left arrow
                    (x) Aim modality screen
                    (x) Aim right arrow
                    (x) Aim modality array
                    (x) Load modality array data
                    (x) Load modality dot spands
                    (x) Modality carousel
            () Render Gain Brightness
                    () Gain container 
                        (x) Gain plus
                        (x) Gain window
                        (x) Gain minus
                        () Toggle through Gain settings functionality
                    (x) Brightness container 
                        (x) Brightness plus
                        (x) Brightness window
                        (x) Brightness minus
                        () Toggle through Brightness settings functionality
    [] Text Modal 
        () Defog 
        () Autolight
# 4/29/2021
    () AIM
            (x) Clear current view html
            (x) Render AIM screen
                (x) Aim home container
                (x) Aim title container
                    (x) Aim title div 
                (x) Aim modality container 
                    (x) Aim left arrow
                    (x) Aim modality screen
                    (x) Aim right arrow
                    (x) Aim modality array
                    (x) Load modality array data
                    (x) Load modality dot spands
                    (x) Modality carousel
            () Render Gain Brightness
                    () Gain container 
                        (x) Gain plus
                        (x) Gain window
                        (x) Gain minus
                        () Toggle through Gain settings functionality
                    (x) Brightness container 
                        (x) Brightness plus
                        (x) Brightness window
                        (x) Brightness minus
                        () Toggle through Brightness settings functionality
             (x) Render Spy 
                (x) Render Spy container
                (x) Render On div
                (x) Render Off div
                (x) Implement On/Off functionality
        (x) Autolight toggle
            (x) Autlight toggle in spy mode
            () User toggles Spy mode, autolight is disabled
            () User is unable to toggle autolight, while in Spy mode
            () If user is not in Laparoscopy specialty, Spy mode toggle is greyed ou
# NOTE: Perhaps, use localstorage to save autolight toggle, specialites and spy mode status
    [] Render Settings
    [] Text Modal 
        () Defog 
        () Autolight
# 4/30/2021
() AIM
            (x) Clear current view html
            (x) Render AIM screen
                (x) Aim home container
                (x) Aim title container
                    (x) Aim title div 
                (x) Aim modality container 
                    (x) Aim left arrow
                    (x) Aim modality screen
                    (x) Aim right arrow
                    (x) Aim modality array
                    (x) Load modality array data
                    (x) Load modality dot spands
                    (x) Modality carousel
            () Render Gain Brightness
                    () Gain container 
                        (x) Gain plus
                        (x) Gain window
                        (x) Gain minus
                        () Toggle through Gain settings functionality
                    (x) Brightness container 
                        (x) Brightness plus
                        (x) Brightness window
                        (x) Brightness minus
                        () Toggle through Brightness settings functionality
             (x) Render Spy 
                (x) Render Spy container
                (x) Render On div
                (x) Render Off div
                (x) Implement On/Off functionality
        (x) Autolight toggle
            (x) Autlight toggle in spy mode
            () User toggles Spy mode, autolight is disabled
            () User is unable to toggle autolight, while in Spy mode
            () If user is not in Laparoscopy specialty, Spy mode toggle is greyed ou
# NOTE: Perhaps, use localstorage to save autolight toggle, specialites and spy mode status
    [] Render Settings
    [] Text Modal 
        () Defog 
        () Autolight
# 5/5/2021
() AIM
    (x) Autolight toggle
        (x) Autlight toggle in spy mode
        (x) User toggles Spy mode, autolight is disabled
        (x) User is unable to toggle autolight, while in Spy mode
        () If user is not in Laparoscopy specialty, Spy mode toggle is greyed ou
# NOTE: Perhaps, use localstorage to save autolight toggle, specialites and spy mode status
    [] Render Settings
        () Settings Autolight 
            (x) Autolight Container
            (x) Autolight Circle div
            (x) Autolight Image div
            (x) Autolight Text div
        () Settings Autolight functionality
            () Event listener
    [] Text Modal 
        () Defog 
        () Autolight
# 5/6/2021
() AIM
    (x) Autolight toggle
        (x) Autlight toggle in spy mode
        (x) User toggles Spy mode, autolight is disabled
        (x) User is unable to toggle autolight, while in Spy mode
        () If user is not in Laparoscopy specialty, Spy mode toggle is greyed ou
# NOTE: Perhaps, use localstorage to save autolight toggle, specialites and spy mode status
    [] Render Settings and Autolight
        () Settings Autolight 
            (x) Autolight Container
            (x) Autolight Circle div
            (x) Autolight Image div
            (x) Autolight Text div
        (x) Settings Autolight functionality
            (x) Event listener
        () Render settings
            () Build function that builds all three settings, instead of an individual function for each setting
                () Container    
                    () Text div
                    () adjustments and title div
                (x) Plus div
                (x) Setting window
                (x) Minus div
    [] Text Modal 
        () Defog 
        () Autolight

# 5/7/2021
() AIM
    (x) Autolight toggle
        (x) Autlight toggle in spy mode
        (x) User toggles Spy mode, autolight is disabled
        (x) User is unable to toggle autolight, while in Spy mode
        () If user is not in Laparoscopy specialty, Spy mode toggle is greyed ou
# NOTE: Perhaps, use localstorage to save autolight toggle, specialites and spy mode status
    [X] Render Settings and Autolight
        (x) Settings Autolight 
            (x) Autolight Container
            (x) Autolight Circle div
            (x) Autolight Image div
            (x) Autolight Text div
        (x) Settings Autolight functionality
            (x) Event listener
        (x) Render settings
            (x) Build function that builds all three settings, instead of an individual function for each setting
                (x) Container    
                    (x) Text div
                    (x) Plus window minus div
                (x) Plus div
                (x) Setting window
                (x) Minus div
        () Build settings adjustment functionality
    [] Text Modal 
        () Defog 
        () Autolight

# 5/12/2021
 [] Build settings adjustment functionality
 [] HUB
    (x) Add HUB btn to sidebar
    (x) Render HUB homepage
    () Functionality
        (x) Areas clickable
        () Search window
 [] Text Modal 
    () Defog 
    () Autolight

# 5/13/2021
 [] Advanced settings text modal
    () Remove exit btn
    () When you exit Advanced Settings, it defaults to Settings

 [] Fix Gain and Brightness settings on SPY 
    () Gain - Settings don't cycle
    () Brightness - Settings don't cycle
 [] HUB
    (x) Add HUB btn to sidebar
    (x) Render HUB homepage
    () Functionality
        (x) Areas clickable
        () Search window
 [] Advance Settings
    (x) Render div
    (x) Titls div
    (x) Exit btn div
    () Advanced Settings div
    () Advanced Settings btns
 [] Text Modal 
    () Defog 
    () Autolight

# 5/14/2021
 [X] Build settings adjustment functionality
    () Text modal for Advance Settings
        (x) Settings - short press
        (x) Advance Settings - long press
        () Remove modal-close 

 [] Fix Gain and Brightness settings on SPY 
    () Gain - Settings don't cycle
    () Brightness - Settings don't cycle
 [] HUB
    (x) Add HUB btn to sidebar
    (x) Render HUB homepage
    () Functionality
        (x) Areas clickable
        () Search window
 [] Advance Settings
    () Render div
    () Render title div
        () Render title
        () Render exit
    () Render btns div

 [] Text Modal 
    () Defog 
    () Autolight




