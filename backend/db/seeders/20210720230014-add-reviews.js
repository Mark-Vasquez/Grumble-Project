"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Reviews",
			[
				{
					userId: 1,
					businessId: 1,
					rating: 4,
					answer: "Duck Donuts is amazing! Duck yeah!",
				},
				{
					userId: 2,
					businessId: 1,
					rating: 5,
					answer: "Donuts are top notch",
				},
				{
					userId: 3,
					businessId: 1,
					rating: 2,
					answer: "Kinda dry, but still ate it",
				},
				{
					userId: 4,
					businessId: 1,
					rating: 4,
					answer: "Love the strawberry glaze!",
				},
				{
					userId: 5,
					businessId: 1,
					rating: 2,
					answer: "I'll pass on this thx",
				},
				{
					userId: 6,
					businessId: 1,
					rating: 3,
					answer: "Not bad, but would not come back",
				},
				{
					userId: 7,
					businessId: 1,
					rating: 5,
					answer: "The chocolate was phenomenal",
				},
				{
					userId: 1,
					businessId: 2,
					rating: 2,
					answer: "The cafe is basic",
				},
				{
					userId: 2,
					businessId: 2,
					rating: 5,
					answer: "Awesome place for brunch!",
				},
				{
					userId: 3,
					businessId: 2,
					rating: 5,
					answer: "Love the avo toast",
				},
				{
					userId: 4,
					businessId: 2,
					rating: 4,
					answer: "The cherry desert needed more umph to it",
				},
				{
					userId: 5,
					businessId: 2,
					rating: 1,
					answer: "Don't like the environment",
				},
				{
					userId: 6,
					businessId: 2,
					rating: 2,
					answer: "Their name rings true. Needs work",
				},
				{
					userId: 7,
					businessId: 2,
					rating: 5,
					answer: "Cute date spot!",
				},
				{
					userId: 3,
					businessId: 3,
					rating: 5,
					answer: "Cute cafe!!",
				},
				{
					userId: 2,
					businessId: 3,
					rating: 5,
					answer: "The steak is really good",
				},
				{
					userId: 6,
					businessId: 3,
					rating: 5,
					answer: "The cafe is my go to for morning coffee",
				},
				{
					userId: 6,
					businessId: 4,
					rating: 5,
					answer: "Yummy hotpot",
				},
				{
					userId: 3,
					businessId: 4,
					rating: 2,
					answer: "A bit too spicy to be honest",
				},
				{
					userId: 4,
					businessId: 4,
					rating: 5,
					answer: "Love the broth here!",
				},
				{
					userId: 4,
					businessId: 5,
					rating: 5,
					answer: "Great Taiwanese food!",
				},
				{
					userId: 8,
					businessId: 5,
					rating: 5,
					answer: "Crispy chicken",
				},
				{
					userId: 5,
					businessId: 5,
					rating: 5,
					answer: "Love the vibes",
				},
				{
					userId: 9,
					businessId: 6,
					rating: 5,
					answer: "Good place for margzzzzz!",
				},
				{
					userId: 3,
					businessId: 6,
					rating: 5,
					answer: "Scrumptious tacoss",
				},
				{
					userId: 5,
					businessId: 6,
					rating: 5,
					answer: "The music here is amazing on Saturday night",
				},
				{
					userId: 5,
					businessId: 7,
					rating: 3,
					answer: "They spelled my child's name on the cake wrong :(",
				},
				{
					userId: 8,
					businessId: 7,
					rating: 5,
					answer: "Been going here since my childhood!",
				},
				{
					userId: 2,
					businessId: 7,
					rating: 5,
					answer: "The cake here is just nostalgic",
				},
				{
					userId: 9,
					businessId: 8,
					rating: 5,
					answer: "The pupusas are the best I ever had",
				},
				{
					userId: 2,
					businessId: 8,
					rating: 5,
					answer: "The meat is so scrumptious",
				},
				{
					userId: 6,
					businessId: 8,
					rating: 5,
					answer: "Just a food truck, but it's amazing",
				},
				{
					userId: 8,
					businessId: 9,
					rating: 5,
					answer: "The pork was soooo flavourful!",
				},
				{
					userId: 7,
					businessId: 9,
					rating: 5,
					answer: "Broth was outta this world",
				},
				{
					userId: 6,
					businessId: 9,
					rating: 1,
					answer: "They gave me chicken instead of pork.....",
				},
				{
					userId: 2,
					businessId: 10,
					rating: 5,
					answer: "Best pizza in the world!",
				},
				{
					userId: 3,
					businessId: 10,
					rating: 5,
					answer: "I go crazy for these hot dogs omgg",
				},
				{
					userId: 4,
					businessId: 10,
					rating: 5,
					answer: "This is maybe my favorite restaurant ever",
				},
				{
					userId: 5,
					businessId: 10,
					rating: 5,
					answer: "The very berry smoothie is a summer banger",
				},
				{
					userId: 6,
					businessId: 10,
					rating: 5,
					answer: "Chicken bake is just pure nostalgia",
				},
				{
					userId: 7,
					businessId: 10,
					rating: 5,
					answer: "Sad they got rid of the combo pizza, but the pepperoni pizza is still a banger",
				},
				{
					userId: 8,
					businessId: 10,
					rating: 5,
					answer: "The cheesiest pizza ever",
				},
				{
					userId: 9,
					businessId: 10,
					rating: 5,
					answer: "Pizza is goooooood",
				},
			],
			{}
		);
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Reviews", null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
