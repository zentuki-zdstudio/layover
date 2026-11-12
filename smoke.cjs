const fs=require('fs'),vm=require('vm');
const handlers={};const els={};
function el(id){return els[id]??(els[id]={innerHTML:'',textContent:'',classList:{add(){},remove(){}},style:{},hidden:true,querySelector(){return null},scrollHeight:0,scrollTop:0})}
const document={getElementById:el,addEventListener(k,fn){handlers[k]=fn},querySelector(){return null},body:{style:{}}};
const mem={};const ls={getItem:k=>mem[k],setItem:(k,v)=>{mem[k]=v}};
const ctx={document,localStorage:ls,navigator:{},location:{protocol:'file:',hostname:''},window:{scrollTo(){}},setTimeout,clearTimeout,console,confirm:()=>true,Date,Blob,URL,File:function(){},Image:function(){},FormData:function(){},globalThis:{crypto:{randomUUID:()=>String(Math.random())}}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'..','app.js'),'utf8'),ctx);
for(const [r,needle] of [['home','Goodbyes'],['circles','My circles'],['radar','Travel radar'],['chat','Chats'],['wall','Memory wall'],['events','Meetups'],['profile','My passport']]){
 handlers.click({target:{closest:()=>({dataset:{action:'nav',route:r}})}});
 if(!el('app').innerHTML.includes(needle))throw new Error(`Missing ${r}: ${needle}`)
 console.log('ok',r,el('app').innerHTML.length)
}
handlers.click({target:{closest:()=>({dataset:{action:'open-circle',id:'c1'}})}});
if(!el('app').innerHTML.includes('Crew chat'))throw new Error('circle not opened');
handlers.click({target:{closest:()=>({dataset:{action:'circle-tab',tab:'people'}})}});
if(!el('app').innerHTML.includes('Sofia'))throw new Error('circle people not opened');
console.log('ok circle, tabs');
