import { Dependencies,RobotEyes,RobotHands} from '../robots/GreenCommute/GreenCommuteRobot';


context("Checking functionalities",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();


describe("Testing HappyPath",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
   })


   it('saving the job',()=>{
    robotEyes.seesTextInUrl('savedJobs')  
    dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
    robotHands.typeTextonDom('placeholder','Search skills','UX{downarrow}{enter}')
     robotHands.typeTextonDom('placeholder','Location','Hyder{downarrow}{enter}')
     robotHands.clickOnDomElement('[data-testid=find-job] > .MuiButton-root > .MuiButton-label > .MuiSvgIcon-root')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',1)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.clickOnDomElement(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
     robotEyes.seesTextInUrl('savedJobs')
     robotEyes.seesDomContainText(':nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]','User Interface Designer')


   })

   it('saving multiple jobs',()=>{
      
    dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
    robotHands.typeTextonDom('placeholder','Search skills','UX{downarrow}{enter}')
     robotHands.typeTextonDom('placeholder','Location','Hyder{downarrow}{enter}')
     robotHands.clickOnDomElement('[data-testid=find-job] > .MuiButton-root > .MuiButton-label > .MuiSvgIcon-root')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',1)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',6)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',10)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.clickOnDomElement(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
     robotEyes.seesTextInUrl('savedJobs')
     robotEyes.seesDomContainText(':nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]','User Interface Designer')



   })

   it('removing jobs from savedlist',()=>{
    dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
    robotHands.typeTextonDom('placeholder','Search skills','UX{downarrow}{enter}')
     robotHands.typeTextonDom('placeholder','Location','Hyder{downarrow}{enter}')
     robotHands.clickOnDomElement('[data-testid=find-job] > .MuiButton-root > .MuiButton-label > .MuiSvgIcon-root')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',1)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',6)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',10)
     robotHands.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
     robotHands.clickOnDomElement(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
     robotEyes.seesTextInUrl('savedJobs')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',1)
     robotHands.clickOnDomElement('.MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',6)
     robotHands.clickOnDomElement('.MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',10)
     robotHands.clickOnDomElement('.MuiButton-outlined > .MuiButton-label')
     robotHands.clickOnDomElement(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',1)
     robotHands.clickOnDomElement('.MuiButton-outlined > .MuiButton-label')
     robotHands.ClickOnTextWithClassAndIndexAndLocator('data-testid','cardLabel-placeholder',6)
     robotHands.clickOnDomElement('.MuiButton-outlined > .MuiButton-label')
     robotHands.clickOnDomElement(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')


   })

})
})