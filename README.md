# jQuery-Reading-List-Plugin
This reading list plugin will be able to take in the photo, name, description and what chapter you’re on for a book or manga and take this information and display it on a nicely layed out page.
In order to properly set up the plugin you need to download the css file provided on github and set up your html in a specific way below.

    <ul id="reading_list">
        <li class="book">
            <div>
                <a>
                    <img src="images/Temp.jpg" alt="Book">
                </a>
            </div>
            <div id="div_text">
                <h2>Title:</h2>
                <p>Title here...</p>
                <h2>Description:</h2>
                <p>description here...</p>
                <h2>Page/Chapter Number:</h2>
                <p>Page number here...</p>
            </div>
        </li>   
    </ul>

You need to also link up your script files using these in this order:

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="jquery.reading-list.js" type="text/javascript"></script>

Once that is done you can call the jQuery plugin like below:

    $("#reading_list").readingList({
        color: "#67007c",
        fontFamily: "Georgia",
        imgBorder: "5px solid #000000",
        imgWidth: "75%",
        outerBorder: "5px solid #000000",
        textBorder: "5px solid #000000",
        bookBackgroundColor: "#ee98ff",
        textBackgroundColor: "blueviolet"
    });

Included here is all the customization options you can use.