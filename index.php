<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Font Upload System</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
</head>
<body>
      <div class="flex justify-center items-center h-screen">
        <div class="w-3/4 h-1/3 mx-auto p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center" id="drop-zone">
          <div class="text-center">
            <p class="text-gray-600 font-medium">Click to upload or drag and drop</p>
            <p class="text-gray-400 font-light">Only TTF File Allowed</p>
          </div>
          <input type="file" id="font-file" accept=".ttf" class="hidden" />
        </div>
      </div>

      
      <div class="mt-10 container w-3/4 mx-auto">
        <div class="bg-white p-5 rounded-lg shadow-lg">
          <h2 class="text-lg font-semibold mb-4">Our Fonts</h2>
          <p class="text-gray-500 font-normal mb-5">Browse a list of Zepto fonts to build your font group.</p>
          <table class="w-full table-auto">
            <thead>
              <tr class="text-left">
                <th class="pb-3">FONT NAME</th>
                <th class="pb-3">PREVIEW</th>
                <th class="pb-3"></th>
              </tr>
            </thead>
            <tbody id="font-list">
            </tbody>
          </table>
        </div>
      </div>



      
      <div class=" bg-white p-6 rounded-lg shadow-lg mt-10 container w-3/4 mx-auto">
        <h2 class="text-2xl font-bold mb-4">Create Font Group</h2>
        <p class="text-gray-600 mb-4">You have to select at least two fonts</p>

       
        <div class="mb-4">
          <input type="text" placeholder="Group Title" class="w-full border border-gray-300 rounded-md p-2">
        </div>

        
        <form id="fontGroupForm" class="">
          <div id="fontRows">
            
            <div class="flex justify-between items-center mb-4 font-row">
             
              <div class="w-1/3 mr-4">
                <input type="text" placeholder="Font Name" class="w-full border border-gray-300 rounded-md p-2 pt-4">
              </div>
              
              <div class="w-1/3 mr-4">
                <select class="w-full border border-gray-300 rounded-md p-2 pt-4">
                  <option>Select a Font</option>
                  <option>Font 1</option>
                  <option>Font 2</option>
                  <option>Font 3</option>
                </select>
              </div>
              
              <div class="w-1/3 mr-4 relative">
                <label for="" class="absolute -top-3 left-5  bg-white">Specific Size</label>
                <input type="number" value="1.00" step="0.01" class="w-full border border-gray-300 rounded-md p-2 pt-4">
              </div>
              
              <div class="w-1/3 mr-4 relative">
                <label for="" class="absolute -top-3 left-5  bg-white">Price Change</label>
                <input type="number" value="1.00" step="0.01" class="w-full border border-gray-300 rounded-md p-2 pt-4">
              </div>
              
              <div class="">
                <button type="button" class="text-red-500 font-bold remove-row p-2">X</button>
              </div>
            </div>
          </div>  

          
          <div class="flex justify-between items-center mt-4">
            <button type="button" id="addRowBtn" class="bg-green-600 text-white p-2 rounded-md">+ Add Row</button>
            <button type="submit" class="bg-green-700 text-white p-2 rounded-md">Create</button>
          </div>
        </form>
      </div>




      <div class="my-10 container w-3/4 mx-auto">
        <div class="bg-white p-5 rounded-lg shadow-lg">
          <h2 class="text-lg font-semibold mb-4">Our Fonts Groups</h2>
          <p class="text-gray-500 font-normal mb-5">List of all available font groups.</p>
          <table class="w-full table-auto">
            <thead>
              <tr class="text-left">
                <th class="pb-3">NAME</th>
                <th class="pb-3">FONTS</th>
                <th class="pb-3">COUNT</th>
              </tr>
            </thead>
            <tbody id="fontGroupsTable">

            </tbody>
          </table>
        </div>
      </div>


    

<script src="assets/js/main.js"></script>
</body>
</html>