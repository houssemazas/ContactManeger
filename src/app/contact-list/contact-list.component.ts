import {Contact} from '../models/Contact';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
value: any;
  constructor() {  
    this.setMarkContactStyle(); 
    this.createContact(); 
  } 
  isMarked = true; 
  isFriendContact = true; 
  isFamilyContact = false; 
  isWorkContact = true; 
 
  markContactStyle: Record<string, string> = {}; 
setMarkContactStyle() { 
this.markContactStyle = { 
'font-style': this.isFriendContact ? 'italic' : 'normal', 
'font-weight': !this.isFamilyContact ? 'bold' : 'normal', 
'font-size': this.isWorkContact ? '24 px' : '12px'  
} 
  
  } 
  ngOnInit(): void {
  }
  deleteContact(id:number):void{
  
 

    let index:number=-1;
    for(let c of this.listContacts){
      index = index+1;
      if(c.id==id){
      break;
      }
      
      }
      if(index!=-1){
      this.listContacts.splice(index,1);
      }
  }
 
  editContact():void{
    
    if(confirm("voulez-vous ajouter le contact")){
      alert("work")
    }
  }
  listContacts: Array<Contact> = new Array<Contact>(); 
  createContact() { 
    this.listContacts.push({id:0,type:"Work",firstName:"Houssem ",lastName:"AZAZ",email:"nahlamtawaa2003@gmail.com",description:"Travail",phone:"98 559 121"});
    this.listContacts.push({id:1,type:"Work",firstName:"Zayneb ",lastName:"Khmile",email:"khmileezayneb@gmail.com",description:"Travail",phone:"98 225 145"});
    this.listContacts.push({id:2,type:"Family",firstName:"Nedia ",lastName:"Hattab",email:"hattab20nedia@gmail.com",description:"Famille",phone:"25 879 314"});
    this.listContacts.push({id:3,type:"Family",firstName:"Minyar ",lastName:"Grine",email:"minyar12grine@gmail.com",description:"Famille",phone:"54 763 114"});
    this.listContacts.push({id:4,type:"Friend",firstName:"Mayssa ",lastName:"Sliti",email:"slitimayssa@gmail.com",description:"Amis",phone:"25 489 632"});
    this.listContacts.push({id:5,type:"Friend",firstName:"Hadil ",lastName:"Boussaada",email:"hadiiiilbs@gmail.com",description:"Amis",phone:"22 445 882"});
  } 
}