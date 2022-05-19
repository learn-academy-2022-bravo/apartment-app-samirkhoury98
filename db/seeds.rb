# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: "test@test.test").first_or_create(password: "12345678", password_confirmation: "12345678")
apartment = [
  {
    street: "123 BigBody Ave",
    city: "Yonkers",
    state: "New York",
    manager: "BigBodySam",
    email: "contact@bigbody",
    price: "$3,500/month",
    bedrooms: 3,
    bathrooms: 2,
    pets: "Yes",
    image: "https://www.elikarealestate.com/wp-content/uploads/2021/07/luxury-nyc-apartments-for-rent.jpeg",
  },
  {
    street: "123 Vicente Ave",
    city: "La Mesa",
    state: "California",
    manager: "Toni Tone",
    email: "tonitone122@aol.com",
    price: "$35,500/month",
    bedrooms: 1,
    bathrooms: 0,
    pets: "Yes",
    image: "https://fox5sandiego.com/wp-content/uploads/sites/15/2021/10/tentsonstreethomelessness.jpg",
  },
  {
    street: "1738 Meka Lane",
    city: "Columbia",
    state: "South Carolina",
    manager: "Toni Tone",
    email: "tonitone122@aol.com",
    price: "$29,999,999/day",
    bedrooms: 15,
    bathrooms: 1000,
    pets: "Can they clean up after themselves?",
    image: "https://res.cloudinary.com/maa/image/upload/c_lfill,g_auto,f_auto,q_auto:eco,h_525,w_1144/v1/maac/-/media/images/properties/south-carolina/greenville/the-greene/the-greene-17_1200x525.jpg",
  },
  {
    street: "0513 Enbrayer Road",
    city: "San Deigo",
    state: "Caifornia",
    manager: "Zane's Mask",
    email: "enbrayerkilledehisset@queensbee.com",
    price: "$50,999,999/second",
    bedrooms: 32,
    bathrooms: 1001,
    pets: "Only if they talk like Brian from Family Guy",
    image: "https://photos.zillowstatic.com/fp/154a86e7f86f18e97b90b22e6ae7e289-p_e.jpg",
  },
]

apartment.each do |each_apartment|
  user.apartments.create each_apartment
  puts "creating apartment #{each_apartment}"
end
