---
title: Fulfillment API
slug: fulfillment
---
\---

title: API Reference



language_tabs: # must be one of https://git.io/vQNgJ

\- shell

\- ruby

\- python

\- javascript

\- PHP

toc_footers:

\- <a href='#'>Sign Up for a Developer Key</a>

  



includes:

\- errors



search: true



code_clipboard: true

\---



\# Introduction



Welcome to the Ezycreate API! Ezycreate gives your company the best, easiest-to-use, easiest-to-setup, and cheapest photo printing app. You can tailor it to your preferences.



We have language bindings in Shell, Ruby, Python ,JavaScript and PHP! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.



This example API can help developers in integrated the designer with ease w.



\# Authentication API



\> To authorize, use this code:



\`\``ruby

request\["x-client-id"] = "we53a244085e600657e145cefb91505c2"

request\["x-client-secret-key"] = "AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4"

request\["Content-Type"] = "application/json"

\`\``



\`\``python

headers = {

  'x-client-id': 'we53a244085e600657e145cefb91505c2',

  'x-client-secret-key': 'AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4',

  'Content-Type': 'application/json'

}

\`\``



\`\``shell

\--header 'x-client-id: we53a244085e600657e145cefb91505c2' \

\--header 'x-client-secret-key: AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4' \

\--header 'Content-Type: application/json'

\`\``





\`\``javascript

xhr.setRequestHeader("x-client-id", "we53a244085e600657e145cefb91505c2");

xhr.setRequestHeader("x-client-secret-key", "AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4");

xhr.setRequestHeader("Content-Type", "application/json");

\`\``



\`\``php

'x-client-id: we53a244085e600657e145cefb91505c2',

\    'x-client-secret-key: AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4',

\    'Content-Type: application/json'

\`\``



\> Make sure to replace x-client-id and x-client-secret-key with your API key.



The endpoints uses API keys to allow access to the API. You can register a new Ezycreate API key at our \[ portal](http://ezycreate.com).



Ezycreate expects for the API key to be included in all API requests to the server in a header that looks like the following:





\`Authentication: x-client-id,x-client-secret-key\`



<aside class="notice">

You must replace <code> x-client-id,x-client-secret-key</code> with your personal API keys.

</aside>





\# Access the designer



\`\``ruby

require "uri"

require "json"

require "net/http"



url = URI("https://api.ezycreate.com/staging/UserAuthentication")



https = Net::HTTP.new(url.host, url.port)

https.use_ssl = true



request = Net::HTTP::Post.new(url)

request\["x-client-id"] = "we53a244085e600657e145cefb91505c2"

request\["x-client-secret-key"] = "AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4"

request\["Content-Type"] = "application/json"





response = https.request(request)

puts response.read_body



\`\``



\`\``python

import requests

import json



url = "https://api.ezycreate.com/staging/UserAuthentication"





headers = {

  'x-client-id': 'we53a244085e600657e145cefb91505c2',

  'x-client-secret-key': 'AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4',

  'Content-Type': 'application/json'

}



response = requests.request("GET", url, headers=headers, data=payload)



print(response.text)



\`\``



\`\``shell

shell --location --request GET 'https://api.ezycreate.com/staging/UserAuthentication' \

\--header 'x-client-id: we53a244085e600657e145cefb91505c2' \

\--header 'x-client-secret-key: AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4' \

\--header 'Content-Type: application/json' \



\`\``



\`\``javascript



var xhr = new XMLHttpRequest();

xhr.withCredentials = true;



xhr.addEventListener("readystatechange", function() {

  if(this.readyState === 4) {

\    console.log(this.responseText);

  }

});



xhr.open("GET", "https://api.ezycreate.com/staging/UserAuthentication");

xhr.setRequestHeader("x-client-id", "we53a244085e600657e145cefb91505c2");

xhr.setRequestHeader("x-client-secret-key", "AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4");

xhr.setRequestHeader("Content-Type", "application/json");



xhr.send(data);

\`\``

\`\``php

<?php



$curl = curl_init();



curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://api.ezycreate.com/staging/UserAuthentication',

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'GET',

  

  CURLOPT_HTTPHEADER => array(

\    'x-client-id: we53a244085e600657e145cefb91505c2',

\    'x-client-secret-key: AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4',

\    'Content-Type: application/json'

  ),

));



$response = curl_exec($curl);



curl_close($curl);

echo $response;



\`\``

\> The above command returns JSON structured like this:



\`\``json

{

  

\    "x_client_id": "19",

\    "user_id": "4564564",

\    "user_token": "0086653fb959ee251740b470e5b9f842"



}

\`\``



This endpoint help  authenticate unique users on your website



\### HTTP Request



\`GET https://api.ezycreate.com/staging/StagingUserAuthentication\`



\### Request Headers



Header  | Description

\--------| ----------- 

x-client-id | API key assigned by Ezycreate

x-client-secret-key | Secret Key assigned by Ezycreate

Content-Type | application/json







<aside class="success">

Response — A successful response will contain a token

</aside>





This endpoint retrieves all products.



\# Products API



\## Import/Sync Products

\`\``ruby

require "uri"

require "json"

require "net/http"



url = URI("https://api.ezycreate.com/staging/products")



https = Net::HTTP.new(url.host, url.port)

https.use_ssl = true



request = Net::HTTP::Get.new(url)

request\["x-client-id"] = "we53a244085e600657e145cefb91505c2"

request\["x-client-secret-key"] = "AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4"

request\["Content-Type"] = "application/json"



response = https.request(request)

puts response.read_body



\`\``



\`\``python

import requests

import json



url = "https://api.ezycreate.com/staging/products")





payload={}

headers = {

  'x-client-id': 'we53a244085e600657e145cefb91505c2',

  'x-client-secret-key': 'AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4',

  'Content-Type': 'application/json'

}



response = requests.request("GET", url, headers=headers, data=payload)



print(response.text)



\`\``



\`\``shell

curl --location --request GET 'https://api.ezycreate.com/staging/products")' \

\--header 'x-client-id: we53a244085e600657e145cefb91505c2' \

\--header 'x-client-secret-key: AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4' \

\--header 'Content-Type: application/json'

\`\``



\`\``javascript



var xhr = new XMLHttpRequest();

xhr.withCredentials = true;



xhr.addEventListener("readystatechange", function() {

  if(this.readyState === 4) {

\    console.log(this.responseText);

  }

});



xhr.open("GET", "https://api.ezycreate.com/staging/products");

xhr.setRequestHeader("x-client-id", "we53a244085e600657e145cefb91505c2");

xhr.setRequestHeader("x-client-secret-key", "AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4");

xhr.setRequestHeader("Content-Type", "application/json");



xhr.send();

\`\``

\`\``php

<?php



$curl = curl_init();



curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://api.ezycreate.com/staging/products',

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'GET',

  CURLOPT_HTTPHEADER => array(

\    'x-client-id: we53a244085e600657e145cefb91505c2',

\    'x-client-secret-key: AWfuukbQFvj0V0_t4CQk79CNRXyXNOnJ-UXGIzfj2tU4',

\    'Content-Type: application/json'

  ),

));



$response = curl_exec($curl);



curl_close($curl);

echo $response;



\`\``



\> The above command returns JSON structured like this:



\`\``json

[{

	"cat_id": "CATZZZ",

	"category_name": "Prints",

	"sub_cat_id": "CATXXXXXX",

	"sub_category_name": "Photo Prints",

	"product_title": "4x6 Print",

	"has_attributes": true,

	"module": "Prints",

	"has_volume_pricing": false,

	"products": [{

		"product_size": "4x6",

		"product_code": "XXXXX",

		"product_title": "4x6 Print",

		"min_quantity": 8,

		"max_quantity": 10000,

		"sell_price": 7.5,

		"attributes": [{

			"id": "ATT001",

			"attribute_name": "Substrate",

			"description": "Select Paper",

			"attribute_code": "001",

			"attribute_options": [{

					"attribute_code": "ATTSSS",

					"attribute_type": "Substrate",

					"attribute_optcode": "XX2",

					"attribute_desc": "Art Gloss",

					"base_price": "5.99",

					"addtn_price": "5.99",

					"min_order_qty": 8,

					"default": true

				},

				{

					"attribute_code": "ATTSSY",

					"attribute_type": "Substrate",

					"attribute_optcode": "YYY",

					"attribute_desc": "Lustre",

					"base_price": "12.00",

					"addtn_price": "12.00",

					"min_order_qty": 8,

					"default": true

				},

				{

					"attribute_code": "ATTSSQ",

					"attribute_type": "Substrate",

					"attribute_optcode": "XXX",

					"attribute_desc": "High Definition Gloss",

					"base_price": "12.00",

					"addtn_price": "12.00",

					"min_order_qty": 8,

					"default": true

				}

			]

		}]

	}],

	"product_images": [{

			"id": 1,

			"image_sequence": 1,

			"image_thumbnail": "https://www.ezycreate.com/images/thumb1.jpg",

			"image_mainimage": "https://www.ezycreate.com/images/1.jpg"

		},

		{

			"id": 2,

			"image_sequence": 2,

			"image_thumbnail": "https://www.ezycreate.com/images/thumb2.jpg",

			"image_mainimage": "https://www.ezycreate.com/images/2.jpg"

		},

		{

			"id": 3,

			"image_sequence": 3,

			"image_thumbnail": "https://www.ezycreate.com/images/thumb3.jpg",

			"image_mainimage": "https://www.ezycreate.com/images/3.jpg"

		},

		{

			"id": 4,

			"image_sequence": 4,

			"image_thumbnail": "https://www.ezycreate.com/images/thumb4.jpg",

			"image_mainimage": "https://www.ezycreate.com/images/4.jpg"

		}

	],

	"content": [{

			"one_line_text": "Professional, personalized, perfect - our photo prints are everything you are looking for. Bring your memories to life, just ",

			"description": "Professional, personalized, perfect - our photo prints are everything you are looking for. Bring your memories to life, just the way you picture them. Order your photo prints online now!",

			"product_specs_desc": "Loose prints for scrap books, albums and giveaways.\r\nStandard paper finish : art gloss.expand_more\r\nPremium paper finish : lustre , high gloss high definition and metallic.\r\nAvailable in 4\"x6\", 5\"x7\", 8\"x10\" & 8\"x12\" sizes.\r\nPrices exclusive of taxes and shipping.",

			"language": "English"

		},

		{

			"one_line_text": "Professionnels, personnalisés, parfaits - nos tirages photo sont tout ce que vous recherchez. Donnez vie à vos souvenirs, juste",

			"description": "Professionnels, personnalisés, parfaits - nos tirages photo sont tout ce que vous recherchez. Donnez vie à vos souvenirs, exactement comme vous les imaginez. Commandez vos tirages photo en ligne dès maintenant !",

			"product_specs_desc": "Impressions en vrac pour albums, albums et cadeaux.\r\nFinition papier standard : art gloss.expand_more\r\nFinition papier premium : lustre, haute brillance haute définition et métallique.\r\nDisponible en 4\"x6\", 5 Formats \"x7\", 8\"x10\" & 8\"x12\".\r\nPrix hors taxes et hors frais de port.",

			"language": "French"

		},

		{

			"one_line_text": "专业、个性化、完美 - 我们的打印照片是您寻找的一切。 让您的回忆栩栩如生，只需",

			"description": "专业、个性化、完美 - 我们的打印照片是您寻找的一切。 让您的回忆栩栩如生，就像您想象的那样。 立即在线订购打印照片！",

			"product_specs\_desc": "用于剪贴簿、相册和赠品的宽松印刷品。\r\n标准纸张表面处理：艺术光泽。展开\_更多\r\n高级纸张表面处理：光泽、高光泽高清和金属色。\r\n提供 4\"x6\", 5 \"x7\"、8\"x10\" 和 8\"x12\" 尺寸。\r\n价格不含税和运费。",

			"language": "Chinese"

		}

	]



}]

\`\``



This endpoint retrieves products that can configured on your store/website



\### HTTP Request



`GET https://api.ezycreate.com/staging/products<ID>`



\### URL Parameters



Parameter | Description

\--------- | -----------

ID | The ID of the Product to retrieve





\# Cart API

\## Adding to your store cart

You will need to configure your website urls in the setting section of the Administration Access given to you.

<aside class="success">

The Callback URL is the url of your website cart.

We will POST unique project id along with the token to this URL

</aside>

\### HTTP Request



`GET https://api.ezycreate.com/staging/projects<ID>`



\### URL Parameters



Parameter | Description

\--------- | -----------

ID | The project id that is returned when the user clicks on add to cart.

This  API can you used to get the product and preview image.



\`\``ruby

require "uri"

require "net/http"



url = URI("https://api.ezycreate.com/staging/projects/38736")



https = Net::HTTP.new(url.host, url.port)

https.use_ssl = true



request = Net::HTTP::Get.new(url)

request\["x-client-id"] = "19"

request\["x-user-token"] = "157b72fac38411a40e2eda487fa64f43"



response = https.request(request)

puts response.read_body

\`\``



\`\``python

import requests



url = "https://api.ezycreate.com/staging/projects/38736"



payload = {}

headers = {

  'x-client-id': '99',

  'x-user-token': '157b72fac38411a40e2eda487fa64f43'

}



response = requests.request("GET", url, headers=headers, data=payload)



print(response.text)





\`\``



\`\``shell

curl --location 'https://api.ezycreate.com/staging/projects/38736' \

\--header 'x-client-id: 99' \

\--header 'x-user-token: 157b72fac38411a40e2eda487fa64f43'

\`\``



\`\``javascript



var xhr = new XMLHttpRequest();

xhr.withCredentials = true;



xhr.addEventListener("readystatechange", function() {

  if(this.readyState === 4) {

\    console.log(this.responseText);

  }

});



xhr.open("GET", "https://api.ezycreate.com/staging/projects/38736");

xhr.setRequestHeader("x-client-id", "99");

xhr.setRequestHeader("x-user-token", "157b72fac38411a40e2eda487fa64f43");



xhr.send();

\`\``

\`\``php

<?php



$curl = curl_init();



curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://api.ezycreate.com/staging/projects/38736',

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'GET',

  CURLOPT_HTTPHEADER => array(

\    'x-client-id: 99',

\    'x-user-token: 157b72fac38411a40e2eda487fa64f43'

  ),

));



$response = curl_exec($curl);



curl_close($curl);

echo $response;





\`\``



\> The above command returns JSON structured like this:



\`\``json

{

  "project_id": 45108,

  "project_name": "project2_May_2023_13_52_2",

  "project_creation_date": "2 May 2023",

  "project_status": "locked",

  "project_items": [

\    {

\    "item_id": "45108_1",

\    "project_id": 45108,

\    "product_id": 333191,

\    "product_name": "8x12 Print",

\    "quantity": 2,

\    "image_count": 2,

\    "substrate_id": "055",

\    "lamination_id": "001",

\    "project_thumbnail": "https://ezycreate.com/project/45108.jpeg"

\    }

  ],

  

}

\`\``



\#Order API

Whenever the customer places an order on your website, you will require to send us the order to create print ready files.



\## Create Order API

\### HTTP Request



\`POST https://api.ezycreate.com/staging/CreateOrder\`



\### URL Parameters



Parameter | Description

\--------- | -----------

ID | The project id that is returned when the user clicks on add to cart.

This  API can you used to get the product and preview image.



\`\``ruby



require "uri"

require "json"

require "net/http"



url = URI("https://api.ezycreate.com/staging/CreateOrder")



https = Net::HTTP.new(url.host, url.port)

https.use_ssl = true



request = Net::HTTP::Post.new(url)

request\["x-client-id"] = "19"

request\["x-user-token"] = "ccxxxfac38411a40e2eda487fa64f43"

request\["Content-Type"] = "application/json"

request.body = "{\r\n  \"orderID\":1,\r\n  \"currency\": \"INR\",\r\n  \"firstName\": \"Test\",\r\n  \"surname\": \"Test\",\r\n  \"address_1\": \"Customers address line 1\",\r\n  \"address_2\": \"Customers address line 2\",\r\n  \"postalCode\": \"403001\",\r\n  \"city\": \"Panjim\",\r\n  \"country\": \"India\",\r\n  \"phone_1\": \"8806320932\",\r\n  \"phone_2\": \"\",\r\n  \"phone_3\": \"\",\r\n  \"email\": \"Test@nvi.co.in\",\r\n  \"shipFirstName\": \"Test\",\r\n  \"shipSurname\": \"Test\",\r\n  \"shipAddress_1\": \"Test\",\r\n  \"shipAddress_2\": \"Test\",\r\n  \"shipPostalCode\": \"403002\",\r\n  \"shipCity\": \"Panjim\",\r\n  \"shipCountry\": \"India\"\r\n}"



response = https.request(request)

puts response.read_body



\`\``



\`\``python



conn = http.client.HTTPSConnection("https://api.ezycreate.com/")

payload = "{\r\n \"orderID\":1,\r\n  \"currency\": \"INR\",\r\n  \"firstName\": \"Test\",\r\n  \"surname\": \"Test\",\r\n  \"address_1\": \"Customers address line 1\",\r\n  \"address_2\": \"Customers address line 2\",\r\n  \"postalCode\": \"403001\",\r\n  \"city\": \"Panjim\",\r\n  \"country\": \"India\",\r\n  \"phone_1\": \"8806320932\",\r\n  \"phone_2\": \"\",\r\n  \"phone_3\": \"\",\r\n  \"email\": \"Test@nvi.co.in\",\r\n  \"shipFirstName\": \"Test\",\r\n  \"shipSurname\": \"Test\",\r\n  \"shipAddress_1\": \"Test\",\r\n  \"shipAddress_2\": \"Test\",\r\n  \"shipPostalCode\": \"403002\",\r\n  \"shipCity\": \"Panjim\",\r\n  \"shipCountry\": \"India\"\r\n}"

headers = {

  'x-client-id': '99',

  'x-user-token': 'ccxxxfac38411a40e2eda487fa64f43',

  'Content-Type': 'application/json'

}

conn.request("POST", "/CreateOrder", payload, headers)

res = conn.getresponse()

data = res.read()

print(data.decode("utf-8"))



\`\``



\`\``shell

curl --location 'https://api.ezycreate.com/staging/CreateOrder' \

\--header 'x-client-id: 99' \

\--header 'x-user-token:  ccxxxfac38411a40e2eda487fa64f43' \

\--header 'Content-Type: application/json' \

\--data-raw '{

  "orderID":1,

  "currency": "INR",

  "firstName": "Test",

  "surname": "Test",

  "address_1": "Customers address line 1",

  "address_2": "Customers address line 2",

  "postalCode": "403001",

  "city": "Panjim",

  "country": "India",

  "phone_1": "8806320932",

  "phone_2": "",

  "phone_3": "",

  "email": "Test@nvi.co.in",

  "shipFirstName": "Test",

  "shipSurname": "Test",

  "shipAddress_1": "Test",

  "shipAddress_2": "Test",

  "shipPostalCode": "403002",

  "shipCity": "Panjim",

  "shipCountry": "India"

}'

\`\``



\`\``javascript



// WARNING: For POST requests, body is set to null by browsers.

var data = "{\r\n  \"orderID\":1,\r\n  \"currency\": \"INR\",\r\n  \"firstName\": \"Test\",\r\n  \"surname\": \"Test\",\r\n  \"address_1\": \"Customers address line 1\",\r\n  \"address_2\": \"Customers address line 2\",\r\n  \"postalCode\": \"403001\",\r\n  \"city\": \"Panjim\",\r\n  \"country\": \"India\",\r\n  \"phone_1\": \"8806320932\",\r\n  \"phone_2\": \"\",\r\n  \"phone_3\": \"\",\r\n  \"email\": \"Test@nvi.co.in\",\r\n  \"shipFirstName\": \"Test\",\r\n  \"shipSurname\": \"Test\",\r\n  \"shipAddress_1\": \"Test\",\r\n  \"shipAddress_2\": \"Test\",\r\n  \"shipPostalCode\": \"403002\",\r\n  \"shipCity\": \"Panjim\",\r\n  \"shipCountry\": \"India\"\r\n}";



var xhr = new XMLHttpRequest();

xhr.withCredentials = true;



xhr.addEventListener("readystatechange", function() {

  if(this.readyState === 4) {

\    console.log(this.responseText);

  }

});



xhr.open("POST", "https://api.ezycreate.com/staging/CreateOrder");

xhr.setRequestHeader("x-client-id", "99");

xhr.setRequestHeader("x-user-token", "cxx157b72fac38411a40e2eda487fa64f43");

xhr.setRequestHeader("Content-Type", "application/json");



xhr.send(data);

\`\``

\`\``php



<?php



$curl = curl_init();



curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://api.ezycreate.com/staging/CreateOrder',

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'POST',

  CURLOPT_POSTFIELDS =>'{

  "organizationName": Ezycreate",

  "organizationCode": "0",

  "guid": "53829a55afb43c5ebfeec113dc7490cb",

  "orderID":1,

  "currency": "INR",

  "firstName": "Test",

  "surname": "Test",

  "address_1": "Customers address line 1",

  "address_2": "Customers address line 2",

  "postalCode": "403001",

  "city": "Panjim",

  "country": "India",

  "phone_1": "8806320932",

  "phone_2": "",

  "phone_3": "",

  "email": "Test@nvi.co.in",

  "shipFirstName": "Test",

  "shipSurname": "Test",

  "shipAddress_1": "Test",

  "shipAddress_2": "Test",

  "shipPostalCode": "403002",

  "shipCity": "Panjim",

  "shipCountry": "India"

}',

  CURLOPT_HTTPHEADER => array(

\    'x-client-id: 99',

\    'x-user-token:  xx157b72fac38411a40e2eda487fa64f43',

\    'Content-Type: application/json'

  ),

));



$response = curl_exec($curl);



curl_close($curl);

echo $response;





\`\``

\> The above command returns JSON structured like this:



\`\``json

{

\    "error": false,

\    "message": "Order Created successfully"

}

\`\``

\## Add Jobs to Order API

\### HTTP Request



`GET https://api.ezycreate.com/staging/AddOrderJob<ID>`



\### URL Parameters



Parameter | Description

\--------- | -----------

ID | The project id that is returned when the user clicks on add to cart.

This  API can you used to place order .



\`\``ruby

require "uri"

require "json"

require "net/http"



url = URI("https://5hed1fwc9h.execute-api.ap-south-1.amazonaws.com/StagingAddOrderJob")



https = Net::HTTP.new(url.host, url.port)

https.use_ssl = true



request = Net::HTTP::Post.new(url)

request\["x-solution-id"] = "19"

request\["x-user-token"] = " 157b72fac38411a40e2eda487fa64f43"

request\["Content-Type"] = "application/json"

request.body = JSON.dump({

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "jobId": "1234_333134",

  "orderID": 19890,

  "quantity": 1,

  "price": 78.56

})



response = https.request(request)

puts response.read_body



\`\``



\`\``python

import http.client

import json



conn = http.client.HTTPSConnection("api.ezycreate.com")

payload = json.dumps({

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "jobId": "1234_333134",

  "orderID": 19890,

  "quantity": 1,

  "price": 78.56

})

headers = {

  'x-solution-id': '19',

  'x-user-token': ' 157b72fac38411a40e2eda487fa64f43',

  'Content-Type': 'application/json'

}

conn.request("POST", "/StagingAddOrderJob", payload, headers)

res = conn.getresponse()

data = res.read()

print(data.decode("utf-8"))





\`\``



\`\``shell

curl --location 'https://api.ezycreate.com/StagingAddOrderJob' \

\--header 'x-solution-id: 19' \

\--header 'x-user-token:  157b72fac38411a40e2eda487fa64f43' \

\--header 'Content-Type: application/json' \

\--data '{

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "jobId":"1234_333134",

  "orderID":19890, 

\    "quantity":1,

\    "price":78.56

\    }'

\`\``



\`\``javascript

// WARNING: For POST requests, body is set to null by browsers.

var data = JSON.stringify({

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "jobId": "1234_333134",

  "orderID": 19890,

  "quantity": 1,

  "price": 78.56

});



var xhr = new XMLHttpRequest();

xhr.withCredentials = true;



xhr.addEventListener("readystatechange", function() {

  if(this.readyState === 4) {

\    console.log(this.responseText);

  }

});



xhr.open("POST", "https://api.ezycreate.com/StagingAddOrderJob");

xhr.setRequestHeader("x-solution-id", "19");

xhr.setRequestHeader("x-user-token", " 157b72fac38411a40e2eda487fa64f43");

xhr.setRequestHeader("Content-Type", "application/json");



xhr.send(data);

\`\``

\`\``php

<?php



$curl = curl_init();



curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://api.ezycreate.com/StagingAddOrderJob',

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'POST',

  CURLOPT_POSTFIELDS =>'{

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "jobId":"1234_333134",

  "orderID":19890, 

\    "quantity":1,

\    "price":78.56

\    }',

  CURLOPT_HTTPHEADER => array(

\    'x-solution-id: 19',

\    'x-user-token:  157b72fac38411a40e2eda487fa64f43',

\    'Content-Type: application/json'

  ),

));



$response = curl_exec($curl);



curl_close($curl);

echo $response;







\`\``



\## Confirm Order API

Final order confirmation

\### HTTP Request



`GET https://api.ezycreate.com/staging/confirmorder<ID>`



\### URL Parameters



Parameter | Description

\--------- | -----------

ID | Order ID.

Final confirmation of the order.



\`\``ruby

require "uri"

require "json"

require "net/http"



url = URI("https://api.ezycreate.com/StagingConfirmOrder")



https = Net::HTTP.new(url.host, url.port)

https.use_ssl = true



request = Net::HTTP::Post.new(url)

request\["x-solution-id"] = "19"

request\["x-user-token"] = " 157b72fac38411a40e2eda487fa64f43"

request\["Content-Type"] = "application/json"

request.body = JSON.dump({

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "orderID": 19890

})



response = https.request(request)

puts response.read_body





\`\``



\`\``python

import http.client

import json



conn = http.client.HTTPSConnection("api.ezycreate.com")

payload = json.dumps({

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "orderID": 19890

})

headers = {

  'x-solution-id': '19',

  'x-user-token': ' 157b72fac38411a40e2eda487fa64f43',

  'Content-Type': 'application/json'

}

conn.request("POST", "/StagingConfirmOrder", payload, headers)

res = conn.getresponse()

data = res.read()

print(data.decode("utf-8"))



\`\``



\`\``shell

curl --location 'https://api.ezycreate.com/StagingConfirmOrder' \

\--header 'x-solution-id: 19' \

\--header 'x-user-token:  157b72fac38411a40e2eda487fa64f43' \

\--header 'Content-Type: application/json' \

\--data '{

\    "organizationName": "photojaanic India",

\    "organizationCode": "19",

\    "orderID": 19890

\    }'

\`\``



\`\``javascript



// WARNING: For POST requests, body is set to null by browsers.

var data = JSON.stringify({

  "organizationName": "photojaanic India",

  "organizationCode": "19",

  "orderID": 19890

});



var xhr = new XMLHttpRequest();

xhr.withCredentials = true;



xhr.addEventListener("readystatechange", function() {

  if(this.readyState === 4) {

\    console.log(this.responseText);

  }

});



xhr.open("POST", "https://api.ezycreate.com/StagingConfirmOrder");

xhr.setRequestHeader("x-solution-id", "19");

xhr.setRequestHeader("x-user-token", " 157b72fac38411a40e2eda487fa64f43");

xhr.setRequestHeader("Content-Type", "application/json");



xhr.send(data);

\`\``

\`\``php

<?php



$curl = curl_init();



curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://api.ezycreate.com/StagingConfirmOrder',

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'POST',

  CURLOPT_POSTFIELDS =>'{

\    "organizationName": "photojaanic India",

\    "organizationCode": "19",

\    "orderID": 19890

\    }',

  CURLOPT_HTTPHEADER => array(

\    'x-solution-id: 19',

\    'x-user-token:  157b72fac38411a40e2eda487fa64f43',

\    'Content-Type: application/json'

  ),

));



$response = curl_exec($curl);



curl_close($curl);

echo $response;







\`\``

\# Print ready  Files

\## Getting the ready jpgs

The Print ready files are available. They can be accessed in the Admin section.

  

\# Fulfillment of Order 

\## Getting your order delivered

NVI is our fulfillment partner.



learn more on how to get your orders fulfilled and shipped directly to customers.



<a href='https://developer.ezycreate.com/fulfillment'>Click Here</a>







\# Postman Collection

https://www.getpostman.com/collections/7215905a37cdc5b3a9ff
