import { BaseDependencies,BaseEyes,BaseHands} from '../BaseRobot';


export class Dependencies extends BaseDependencies{

   
    visitGreenCommute(text:string){
        this.accessUrl(text);
    }
}


export class RobotHands extends BaseHands{

    CheckdomElementIsClicked(dom:string)
    {
        this.clickOnDomElement(dom);
    }

    CheckIdElementIsTyped(id:string,text:string)
    {
        this.typeTextonId(id,text);
    }

    clickonDomCheckbox(locatorName: string, locatorValue: string) {
        cy.get(`[${locatorName}="${locatorValue}"]`).click();
        return this;
      }

    ClickOnTextWithClassAndIndexAndLocator(locatorName: string, domClass: string, index: number) {
        cy.get(`[${locatorName}=${domClass}]`)
          .eq(index)
          .click();
        return this;
      } 


}

export class RobotEyes extends BaseEyes{
      

   
    checkAlerts(text:string){
        cy.on('window:alert',(textToExpect)=>{
            expect(textToExpect).to.contains(text);
        }
    
    )}

    chectIdVisible(id:string)
    {
        this.seesIdVisible(id);
    }


    checkDomCantaiontext(dom:string,text:string)
    {
        this.seesDomContainText(dom,text);
    }

    seesTextInUrl(text: string) {
        cy.url().should("contain", text)
      }

}