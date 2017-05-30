import Ember from 'ember';

export default Ember.Route.extend({
 model(){
   return Ember.RSVP.hash({
     rentals: this.store.findAll('rental'),
     announcements: this.store.findAll('announcement')
   });
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
   },
   saveAnnouncement3(params){
     var newAnnouncement = this.store.createRecord('announcement', params);
     newAnnouncement.save();
     this.transistionTo('index');
   },
   destroyAnnouncement(announcement){
     announcement.destroyRecord();
     this.transistionTo('index');
   }
 }
});
