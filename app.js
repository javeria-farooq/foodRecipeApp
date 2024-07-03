let section = document.querySelector("section") // content main section
let dishName = document.querySelectorAll(".dish-name") // dish Name
let searchInput = document.querySelector(".searchInput") // search box
let searchBtn = document.querySelector(".searchBtn") // search btn
let dishCards = document.querySelectorAll(".dish-card") // dish card
let viewRecipeBtn = document.querySelectorAll(".view-recipe") // view recipe btn
let recipeInstructions = document.querySelector(".recipeInstructions") // recipe content div

let recipeCloseBtn = document.querySelector(".recipeCloseBtn") // popup close btn
let recipeName = document.querySelector(".recipeName") // recipe name
let recipeDetails = document.querySelector(".recipeDetails") // popup div

let dishFound = false ;

searchBtn.addEventListener("click", () => {

    let firLetterInp = searchInput.value.trim().slice(0,1).toUpperCase()
    let remainLetterInp = searchInput.value.trim().slice(1).toLowerCase()
    let newInpVal = firLetterInp + remainLetterInp
    let dishCard;

    if(newInpVal !== "") {
        for(let i = 0; i < dishCards.length; i++) {
            dishCard = dishCards[i]
            dishCard.classList.add("hide")
        }
        for(let i = 0; i < dishName.length; i++) {
            let dish = dishName[i]
    
            if(dish.textContent === newInpVal) {
                dishFound = true
                dish.parentNode.classList.remove("hide")
                dish.parentNode.classList.add("active")
                searchInput.value = ""
                break
            }
    
            else{
                dishFound = false
            }
        }
    
        if(dishFound === false) {
            section.innerHTML = "<h1 class='sorry'> Sorry! Your dish is coming soon... </h1>"
        }
    }

    else{
        section.innerHTML = "<h1 class='sorry'> Please Enter a valid dish! </h1>"
    }
})

/*view recipe btn */

for(let i = 0; i < viewRecipeBtn.length; i++) {
    let showRecipe = viewRecipeBtn[i]
    showRecipe.addEventListener("click", () => {
        openRecipePopup()
        let recipeTitle = showRecipe.parentNode.childNodes[3]
        if(recipeTitle.textContent == "Broast") {
            recipeName.innerText = "Broast"
            recipeInstructions.innerHTML = `<li>Wash and drain the chicken. Prick the chicken light with a fork. This is for it to absorb as much moisture into it.</li>
            <li>Whisk together the rest of the ingredients - from milk to salt - in a flat and deep bowl. Soak the chicken into it. Keep it in the fridge as long as possible.</li>
            <li>At the time of frying, take out the chicken. Drain the spiced buttermilk into a bowl - not completely, but majority of it.</li>
            <li>Whisk together the flour, paprika, salt and pepper in a flat plate and set aside.</li>
            <li>Heat sufficient oil for deep frying. Make sure the oil becomes really hot.</li>
            <li>Roll the chicken into the drained buttermilk as much as you can. Directly dip into the flour mix. Coat well. In case you need a thicker coat, repeat the process again.</li>
            <li>Drop the chicken peices into hot oil and fry till both sides are browned and the chicken is done.</li>
            <li>Drain and serve hot with coleslaw, fries and bun!</li>`
        }

        else if(recipeTitle.textContent == "Tikka") {
            recipeName.innerText = "Chicken Tikka"
            recipeInstructions.innerHTML = `<li>Add the ingredients for the first marinade in a bowl and mix well.</li>
            <li>Cover the bowl and refrigerate for 3-4 hours or overnight.</li>
            <li>Add the ingredients for the second marinade in the bowl and mix well.</li>
            <li>Keep the marinated chicken aside for 30 minutes.</li>
            <li>Preheat the oven to 400 degrees F (200 degrees C).</li>
            <li>Thread the marinated chicken in the skewers along with onion and capsicum.</li>
            <li>Line the skewers on a foil lined baking tray.</li>
            <li>Grill for 10-12 minutes and then rotate the skewers.</li>
            <li>Grill for another 10-12 minutes.</li>
            <li>Increase the oven temperature to 420 Degrees F and broil the skewers for 3-4 minutes until they are slightly charred.</li>`
        }

        else if(recipeTitle.textContent == "Zinger burger") {
            recipeName.innerText = "Zinger Burger"
            recipeInstructions.innerHTML = `<li>In a bowl, whisk the eggs and set aside. Crumble chicken cube in flour.</li>
            <li>Take another bowl, add the dry ingredients, including chicken cube flour and mix them well. Rub the dry spices well into the pieces of chicken and dip them in the whisked eggs. Repeat this process three to four times.</li>
            <li>Fry chicken till golden brown.</li>
            <li>Take round bun and cut in the middle, grease the pan lightly and toast both sides. Put hot milk and then mayonnaise on the buns.</li>
            <li>Place the chicken pieces on the buns and put hot sauce over them.</li>
            <li>Lastly, put iceberg lettuce and cheese slices and close the bun. Your chicken burgers are ready.</li>`
        }

        else if(recipeTitle.textContent == "Sandwich") {
            recipeName.innerText = "Club Sandwich"
            recipeInstructions.innerHTML = `<li>Toast bread until golden, then spread a thin layer of butter on both sides of every slice.</li>
            <li>Spread mayonnaise on one side of one slice of bread. Top with lettuce and tomato slices, then season lightly with salt and pepper. Place bacon slices on top.</li>
            <li>Spread mayonnaise on both sides of a second piece of bread and place on top of bacon. Top with cheddar, turkey, and ham. Spread mayonnaise on one side of the last piece of bread and place on top of sandwich, mayo side down.</li>
            <li>Secure with toothpicks and cut into 4 triangles.</li>`
        }

        else if(recipeTitle.textContent == "Chocolate cake") {
            recipeName.innerText = "Chocolate cake"
            recipeInstructions.innerHTML = `<li>Mix all the dry ingredients and pre-heat the oven
                To prepare this easy chocolate cake recipe, pre-heat the oven to 180°C. Meanwhile, grease and line a 7-inch round cake tin with baking paper and butter. Now, sieve together the flour, cocoa powder and baking powder. Keep the dry ingredients aside.</li>
                <li>Mix wet ingredients into dry ingredients and bake the cake batter
                Take a glass bowl and mix butter and sugar into it. Beat these ingredients till light and fluffy. Make sure that the sugar has dissolved. Now, beat in the eggs, two at a time and allowing at least two minutes gap between each addition. Lightly fold in the flour into the mixture. Pour the batter into the prepared tin and bake for 35 to 40 minutes.</li>
                <li>Tasty Chocolate Cake is ready!</li>
                <li>Check if the cake is baked properly by inserting a toothpick into the centre. If it comes out clean, then the cake is done. Transfer the cake onto a wire rack and allow it to cool completely. Cover with your favourite toppings. Then slice and serve.
            </li>`
        }

        else if(recipeTitle.textContent == "Custard") {
            recipeName.innerText = "Custard"
            recipeInstructions.innerHTML = `<li>Place milk, vanilla extract, and butter in a saucepan. Cook and stir over medium heat until simmering; remove from heat before it comes to a boil.</li>
            <li>Whisk eggs, sugar, and cornstarch together in a bowl until sugar dissolves.</li>
            <li>Set the saucepan back over low heat. Pour in egg mixture slowly, whisking constantly, until custard thickens enough to coat the bottom of a spoon, 5 to 10 minutes.</li>
            <li>Serve warm or transfer custard into a large bowl, cover, and allow to cool before chilling.</li>`
        }

        else if(recipeTitle.textContent == "Mousse") {
            recipeName.innerText = "Mousse"
            recipeInstructions.innerHTML = `<li>The melted chocolate mixture is super easy to make. The most crucial step is paying attention to the cream while it’s on the stovetop. You never want to let it come to a full boil.</li>
            <li>Cover the bowl with plastic wrap and refrigerate until cold, about 2 hours. You want it super cold before you add in the whipped cream!</li>
            <li>Use an electric mixer to beat the remaining heavy cream. You’ll want it to form stiff peaks. Then fold the cream into the chocolate mixture. At this point you can also make a separate batch of whipped cream for topping.</li>
            <li>Spoon the mousse into dessert cups, top with whipped cream, and chocolate shavings, and serve at once!</li>`
        }

        else if(recipeTitle.textContent == "Ice cream") {
            recipeName.innerText = "Ice Cream"
            recipeInstructions.innerHTML = `<li>In a medium saucepan, combine cream, milk, sugar, and cocoa powder. Heat over medium heat, stirring occasionally, until sugar dissolves and mixture simmers.</li>
            <li>Remove from heat and stir in vanilla extract.</li>
            <li>Let mixture cool to room temperature.</li>
            <li>Cover and refrigerate for at least 2 hours or overnight.</li>
            <li>Pour mixture into an ice cream maker and churn according to manufacturer's instructions.</li>
            <li>Freeze for at least 2 hours before serving.</li>
            <li>Enjoy your delicious homemade chocolate ice cream!</li>`
        }

        else if(recipeTitle.textContent == "Cappuccino") {
            recipeName.innerText = "Cappuccino"
            recipeInstructions.innerHTML = `<li>Brew a shot of espresso into a cup.</li>
            <li>Steam milk to a microfoam consistency (hot and silky, but still pourable).</li>
            <li>Pour the steamed milk into the cup with the espresso, holding back the frothed milk with a spoon.</li>
            <li>If desired, top with frothed milk and create a design (like a heart or leaves).
            </li>
            <li>Serve immediately and enjoy!</li>
            <li>Note: You can adjust the ratio of espresso to milk to your liking, but a traditional cappuccino is 1/3 espresso, 1/3 steamed milk, and 1/3 frothed milk.</li>`
        }

        else if(recipeTitle.textContent == "Chocolate milk shake") {
            recipeName.innerText = "Chocolate Milk Shake"
            recipeInstructions.innerHTML = `<li>In a blender, combine the ice cream, milk, chocolate syrup, and vanilla extract (if using).</li>
            <li>Blend on high speed until smooth and creamy.</li>
            <li>Add ice cubes if you want a thicker, colder shake.</li>
            <li>Blend again until the ice is crushed and the shake is the desired consistency.
            </li>
            <li>Pour into a glass and enjoy!</li>
            <li>You can also customize this recipe to your taste by adding more chocolate syrup, using different types of milk, or adding other ingredients like whipped cream or chopped nuts. Enjoy your delicious chocolate milkshake!</li>`
        }

        else if(recipeTitle.textContent == "Hot chocolate") {
            recipeName.innerText = "Hot Chocolate"
            recipeInstructions.innerHTML = `<li>In a small saucepan, heat the milk over medium heat until it starts to simmer.
            </li>
            <li>In a separate bowl, whisk together the cocoa powder, sugar, and salt until well combined.</li>
            <li>Gradually whisk the dry ingredients into the hot milk, stirring constantly to avoid lumps.</li>
            <li>If using vanilla extract, whisk it in at this point.</li>
            <li>Pour the hot chocolate into a mug and enjoy!</li>
            <li>You can customize this recipe to your taste by adding marshmallows, whipped cream, or a pinch of cinnamon on top. Enjoy!</li>`
        }

        else{
            recipeName.innerText = "Strawberry Milk Shake"
            recipeInstructions.innerHTML = `<li>In a blender, combine ice cream, strawberries, and milk.</li>
            <li>Blend until smooth and creamy.</li>
            <li>Add honey if you want it sweeter.</li>
            <li>Blend again until well mixed.</li>
            <li>Pour into glasses and serve immediately.</li>
            <li>You can add ice cubes if you want a thicker consistency.</li>
            <li>Enjoy your yummy strawberry milkshake!</li>`
        }
    })
}

/*recipes popup fnc */

const openRecipePopup = () => {
    recipeDetails.classList.remove("hide")
    recipeDetails.classList.add("active")
}

/*close btn */

recipeCloseBtn.addEventListener("click", () => {
    recipeDetails.classList.remove("active")
    recipeDetails.classList.add("hide")
})