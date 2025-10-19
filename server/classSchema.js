class Datastore{
    // constructor(){
    //     this.data=[]
    // }
    // addItems(item){
    //     this.data.push(item)
    // }
    // getAllItems(){
    //     return this.data
    // }
    // getItemById(id){
    //     return this.data.find(item=>item.id==id)
    // }
    // deleteItem(id){
    //     this.data=this.data.filter(item=>item.id!==id)
    // }
    constructor(id,name,cls,sub,grade){
        this.id=id
        this.name=name
        this.grade=grade
        this.sub=sub
        this.cls=cls
    }
    getDetails(){
        return {name,grade,sub,cls}
    }
    inputDetails(){

    }
}

module.exports=Datastore