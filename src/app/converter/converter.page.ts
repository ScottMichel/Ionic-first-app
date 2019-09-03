import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  public changeRate:number = .0086;
  public yenValue:number = null;

  public isHidden = true;
  public showIs = true;
  public changeText = "Afficher";
  public buttonColor: string = "primary";
  public countries:Array<string>= ["France", "Espagne", "Italie", "Canada", "Suisse", "Russie", "Japon"];

  public currencies: Array<{label:string, rate: number, symbol:string }> = [
    {label: "Euro", rate: .0086, symbol: "€"},
    {label: "US Dollars", rate: .0094, symbol: "$"},
    {label: "Dollars Canadien", rate: .013, symbol: "$"},
    {label: "CHF", rate: .0094, symbol: "₣"},
    {label: "Shekel", rate: .033, symbol: "₪"},
  ];
  public selectedCurrency = {
    label: "",
    rate:0,
    symbol: ""
  };


  constructor() { }

  ngOnInit() {
  }

  showHideForm(color){
    this.isHidden = ! this.isHidden;
    //this.changeText = this.isHidden? "Afficher": "Masquer"; 
    this.buttonColor=color
    if (this.isHidden){
      this.changeText = "Afficher";
      this.buttonColor ="success";
    } else {
      this.changeText = "Masquer";
      this.buttonColor = color;
    }
  }


}
