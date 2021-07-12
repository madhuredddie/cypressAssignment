import { Dependencies,RobotEyes,RobotHands} from '../robots/GreenCommute/GreenCommuteRobot';


context("Checking functionalities",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();


describe("Testing HappyPath",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findjobs")
   })


   it('testing flow',()=>{
  //  <h4 class="MuiTypography-root jss19 MuiTypography-h4">Hyderabad, Telangana, India</h4>
      robotEyes.checkDomCantaiontext('[data-testid=location-placeholder] > .MuiTypography-root','Hyderabad, Telangana, India')
     // <input autocomplete="off" placeholder="Search skills" type="text" class="MuiInputBase-input undefined jss141" value="" id="mui-80876">
     robotHands.typeTextonDom('placeholder','Search skills','UX{downarrow}{enter}')
     robotHands.typeTextonDom('placeholder','Location','Hyder{downarrow}{enter}')
     robotHands.clickOnDomElement('[data-testid=find-job] > .MuiButton-root > .MuiButton-label > .MuiSvgIcon-root')
     robotEyes.seesDomContainText('.MuiButton-label > .MuiTypography-root','Filter')
     robotHands.clickOnDomElement('[data-testid=filterButton]')
     robotHands.clickonDomCheckbox('name','30-40 kms')
     robotHands.clickOnDomElement(':nth-child(2) > [data-testid=button] > .MuiButton-label')
   })


   it('checking green coomute',()=>{
      
   // robotEyes.checkDomCantaiontext('[data-testid=location-placeholder] > .MuiTypography-root','Hyderabad, Telangana, India')
    robotHands.typeTextonDom('placeholder','Search skills','UX{downarrow}{enter}')
    robotHands.typeTextonDom('placeholder','Location','Hyder{downarrow}{enter}')
    robotHands.clickOnDomElement('[data-testid=find-job] > .MuiButton-root > .MuiButton-label > .MuiSvgIcon-root')
    robotHands.clickOnDomElement('[data-testid=filterButton]')
    robotHands.clickonDomCheckbox('name','30-40 kms')
    robotHands.clickOnDomElement(':nth-child(2) > [data-testid=button] > .MuiButton-label')
    robotHands.clickOnDomElement('[data-testid=filterButton]')
    robotHands.clickonDomCheckbox('name','Yes')
    robotEyes.seesDomContainText(':nth-child(3) > [data-testid=filter-type] >','Green Commute')
    robotHands.clickOnDomElement(':nth-child(2) > [data-testid=button] > .MuiButton-label')

    

   })

   it('cehcking transport in filters',()=>{

    robotHands.typeTextonDom('placeholder','Search skills','UX{downarrow}{enter}')
    robotHands.typeTextonDom('placeholder','Location','Hyder{downarrow}{enter}')
    robotHands.clickOnDomElement('[data-testid=find-job] > .MuiButton-root > .MuiButton-label > .MuiSvgIcon-root')
    robotHands.clickOnDomElement('[data-testid=filterButton]')
    robotHands.clickonDomCheckbox('name','Metro')
    robotHands.clickOnDomElement(':nth-child(2) > [data-testid=button] > .MuiButton-label')
    robotHands.clickOnDomElement('[data-testid=filterButton]')
    robotHands.clickonDomCheckbox('name','Motor cycle')
    robotHands.clickonDomCheckbox('name','Bus')
    robotHands.clickonDomCheckbox('name','Car Pooling')
    robotHands.clickOnDomElement(':nth-child(2) > [data-testid=button] > .MuiButton-label')


   })

   

})

})