import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
    data : Date = new Date();

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('product-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');

        this.dropdownList = [
                              {"id":1,"itemName":"1"},
                              {"id":2,"itemName":"2"},
                              {"id":3,"itemName":"3"}
                            ];
        this.selectedItems = [
            {"id":1,"itemName":"numero"}
        ];
        this.dropdownSettings = {
                                  singleSelection: true,
                                  text:"Select language",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"",
                                  lazyLoading: true,
                                  maxHeight: 100
                                };
        this.dropdownList1 = [
                              {"id":1,"itemName":"150 grs"},
                              {"id":2,"itemName":"300 grs"},
                              {"id":3,"itemName":"500 grs"}
                            ];
        this.selectedItems1 = [
            {"id":1,"itemName":"gramos"},
        ];
        this.dropdownSettings1 = {
                                  singleSelection: true,
                                  text:"Select currency",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"",
                                  lazyLoading: true,
                                  maxHeight: 100
                                  
                                };
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('product-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    }
}
