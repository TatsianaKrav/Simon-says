import { FieldWrapper } from "./components/field-wrapper/field-wrapp.js";
import { ElementCreator } from "./utils/elementCreator.js";
import { ButtonsWrapper } from "./components/btns-wrapper/btnsWrapp.js";
import { SelectsWrapper } from "./components/selectsWrapp/selectsWrapp.js";


export class Game extends ElementCreator {
    fieldWrapper;
    btnsWrapper;
    levelObj;
    gameObj;

    constructor() {
        super('div', 'container');
    }

    init(levelName, gameName) {
        const actionsWrapper = new ElementCreator('div', 'menu');
        const selectsWrapper = new SelectsWrapper(levelName, gameName);
        this.levelObj = selectsWrapper.getSelections()[0];
        this.gameObj = selectsWrapper.getSelections()[1];

        this.btnsWrapper = new ButtonsWrapper(this.levelObj);
        this.fieldWrapper = new FieldWrapper(this.levelObj, this.gameObj);
        const timer = this.fieldWrapper.getTimer();
        const field = this.fieldWrapper.getField();
        this.btnsWrapper.create(timer, field);


        actionsWrapper.append(selectsWrapper, this.btnsWrapper);
        this.append(actionsWrapper, this.fieldWrapper);
        this.prependTo(document.body);
    }


    /*  create(levelSelect, games) {
         this.fieldWrapper = new FieldWrapper(levelSelect, games);
         const timer = this.fieldWrapper.getTimer();
         const field = this.fieldWrapper.getField();
         const currentGame = this.fieldWrapper.getCurrentGame();
         this.btnsWrapper = new ButtonsWrapper(field, timer, currentGame);
 
         this.append(this.fieldWrapper, this.btnsWrapper);
     } */

    /*   recreate(level, gameName) {
          const children = this.getChildren();
          Array.from(children).forEach((el, i) => {
              if (i !== 0) {
                  el.remove();
              }
          })
  
          this.create(level, gameName);
      } */

}

