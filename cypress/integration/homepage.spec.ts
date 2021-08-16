import { Dependencies,RobotEyes,RobotHands} from '../robots/GreenCommute/GreenCommuteRobot';


context("Checking functionalities",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();


describe("Testing HappyPath",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/")

    })

     it("testing flow",()=>{
          
          robotEyes.seesTextWithClass('jss6 > .MuiTypography-root',"Where do you stay?")
         // robotHands.typeTextonId('mui-64954',"Hyderaba{downarrow}{enter}")
           robotHands.typeTextonClass('MuiInputBase-input','Hyderaba{downarrow}{enter}')
          // <span class="MuiButton-label">Next</span>
          robotHands.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
          //<input autocomplete="off" placeholder="Enter your job location" type="text" class="MuiInputBase-input jss17" value="" id="mui-78553">
          robotHands.typeTextonClass('MuiInputBase-input','Banglore{downarrow}{enter}')
          robotHands.clickOnDomElement('.MuiButton-containedPrimary')
          /*<input aria-invalid="false" autocomplete="off" placeholder="Enter your skills" type="text" class="MuiInputBase-input MuiOutlinedInput-input jss17
           MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedStart 
           MuiOutlinedInput-inputAdornedStart" aria-autocomplete="list" autocapitalize="none" spellcheck="false" value="" id="mui-27941">*/
        //  robotHands.typeTextonClass('MuiInputBase-input MuiOutlinedInput-input','product{downarrow}{enter}')
          robotHands.typeTextonDom('placeholder','Enter your skills','product{downarrow}{enter}') 
          robotHands.wait(2000)
          robotHands.typeTextonDom('placeholder','Enter your skills','java dev{downarrow}{enter}')
          //cy.get('.MuiButton-label')
          robotHands.clickOnDomElement('.MuiButton-label')
          robotEyes.seesTextInUrl('findJobs')
          robotHands.wait(4000)
     })

     it('checking skip button',() =>{

        
            robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
            robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
            robotHands.clickOnDomElement(".MuiButton-containedPrimary")
    
            robotEyes.seesTextInUrl('findJobs')
            robotHands.wait(2000)

     })

     it('checking Next Button with empty values',() => {
    
            robotHands.clickOnDomElement(".MuiButton-containedPrimary")
            robotEyes.checkAlerts('please enter the location')
            robotHands.typeTextonClass('MuiInputBase-input','Hyderaba{downarrow}{enter}')
            // <span class="MuiButton-label">Next</span>
            robotHands.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
            robotHands.clickOnDomElement(".MuiButton-containedPrimary")
            robotEyes.checkAlerts('please enter the location')
            
        


     })

     it('checking Back button',()=>{

            robotHands.typeTextonClass('MuiInputBase-input','Hyderaba{downarrow}{enter}')
            // <span class="MuiButton-label">Next</span>
            robotHands.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
            robotHands.clickOnDomElement('.jss39')
            robotHands.typeTextonClass('MuiInputBase-input','Hyderaba{downarrow}{enter}')
            // <span class="MuiButton-label">Next</span>
            robotHands.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
            robotHands.typeTextonClass('MuiInputBase-input','Banglore{downarrow}{enter}')
            robotHands.clickOnDomElement('.MuiButton-containedPrimary')
            robotHands.clickOnDomElement('.jss42')
            robotHands.clickOnDomElement('.jss42')
            robotHands.wait(2000)

     })

})

})