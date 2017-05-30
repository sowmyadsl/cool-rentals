import Ember from 'ember';


var rentals = [{
  id: 1,
  owner: "Kaidero",
  city: "Portland",
  type: "Cardboard Box",
  bedrooms: 2,
  image: "http://cardboard.es/wp-content/uploads/2016/04/zimoun_zweifel-blog-cardboard-carton-arte-mueseo.jpg"
},{
  id:2,
  owner: "Sowmya",
  city: "Portland",
  type: "Townhome",
  bedrooms: 3,
  image: "https://s-media-cache-ak0.pinimg.com/736x/94/e3/a8/94e3a872b40e4d5f09aadd08c35edb03.jpg"
},{
  id:3,
  owner: "Tom",
  city: "Mars",
  type: "Space Station",
  bedrooms: 5,
  image: "http://i.dailymail.co.uk/i/pix/2015/07/01/10/2A22D55F00000578-3145670-image-a-20_1435744383069.jpg"
}];

export default Ember.Route.extend({
 model(){
   return this.store.findAll('rental');
 },
 actions: {
   saveRental3(params){
     var newRental = this.store.createRecord('rental', params);
     newRental.save();
     this.transistionTo('index');
   },
   destroyRental(rental){
     rental.destroyRecord();
     this.transistionTo('index');
   }
 }
});
