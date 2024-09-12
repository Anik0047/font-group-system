
const fileInput = document.querySelector('input[type="file"]');
const dropZone = document.querySelector('#drop-zone');


dropZone.addEventListener('click', () => {
  fileInput.click();
});


fileInput.addEventListener('change', (e) => {
  
  const uploadedFile = e.target.files[0];

  
  if (uploadedFile.name.endsWith('.ttf')) {
    
    uploadFontToServer(uploadedFile);
  } else {
    alert('Only TTF files are allowed!');
  }
});


dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('bg-blue-200');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('bg-blue-200');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('bg-blue-200');

  
  for (const item of e.dataTransfer.items) {
    const uploadedFile = item.getAsFile();
  
    
    if (uploadedFile.name.endsWith('.ttf')) {
      
      uploadFontToServer(uploadedFile);
    } else {
      alert('Only TTF files are allowed!');
    }
  }
});


function uploadFontToServer(uploadedFile) {
try {

const formData = new FormData();
formData.append('font_file', uploadedFile);


fetch('upload-font.php', {
method: 'POST',
body: formData,
})
.then((response) => response.json())
.then((data) => {
console.log(data); 

if (data.success) {
alert('File uploaded successfully!');


const uploadedFontsList = document.querySelector('#font-list');
const uploadedFontRow = document.createElement('tr');
const fileNameWithoutExtension = uploadedFile.name.split('.')[0]; 


const fontFace = new FontFace(fileNameWithoutExtension, `url('uploads/${data.file}')`);
fontFace
  .load()
  .then(function (loadedFont) {
    document.fonts.add(loadedFont);

    
    const preview = `<p style="font-family: '${fileNameWithoutExtension}', sans-serif;">Example Style</p>`;

    
    uploadedFontRow.innerHTML = `
      <td>${fileNameWithoutExtension}</td>
      <td>${preview}</td>
      <td><button class="text-red-500 delete-button">Delete</button></td>
    `;
    uploadedFontsList.appendChild(uploadedFontRow);

    
    const deleteFontButton = uploadedFontRow.querySelector('button.delete-button');
    deleteFontButton.addEventListener('click', () => {
      uploadedFontRow.remove();
    });
  })
  .catch(function (error) {
    console.error('Font failed to load:', error);
  });
} else {
alert('Error: ' + data.error);
}
})
.catch((error) => {
console.log('Error uploading font file:', error);
});
} catch (error) {
console.log('Error uploading font file:', error);
}
}


const fontGroupForm = document.getElementById('fontGroupForm');
const addRowButton = document.getElementById('addRowBtn');


function addRow() {
  
  const fontRowsContainer = document.getElementById('fontRows');

  
  const newRow = document.createElement('div');
  newRow.classList.add('flex', 'justify-between', 'items-center','mb-4', 'font-row');

  
  const fontNameInputContainer = document.createElement('div');
  fontNameInputContainer.classList.add('w-1/3','mr-4');
  const fontNameInput = document.createElement('input');
  fontNameInput.type = 'text';
  fontNameInput.placeholder = 'Font Name';
  fontNameInput.classList.add('w-full', 'border', 'border-gray-300', 'rounded-md', 'p-2', 'pt-4');
  fontNameInputContainer.appendChild(fontNameInput);

  
  const fontSelectionDropdownContainer = document.createElement('div');
  fontSelectionDropdownContainer.classList.add('w-1/3','mr-4');
  const fontSelectionDropdown = document.createElement('select');
  fontSelectionDropdown.classList.add('w-full', 'border', 'border-gray-300', 'rounded-md', 'p-2', 'pt-4');
  const fontOptions = [
    { value: '', text: 'Select a Font' },
    { value: 'Font 1', text: 'Font 1' },
    { value: 'Font 2', text: 'Font 2' },
    { value: 'Font 3', text: 'Font 3' },
  ];
  fontOptions.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    fontSelectionDropdown.appendChild(optionElement);
  });
  fontSelectionDropdownContainer.appendChild(fontSelectionDropdown);

  
  const specificSizeInputContainer = document.createElement('div');
  specificSizeInputContainer.classList.add('w-1/3','mr-4','relative');
  const specificSizeLabel = document.createElement('label');
  specificSizeLabel.textContent = 'Specific Size';
  specificSizeLabel.classList.add('absolute', '-top-3', 'left-5', 'bg-white');
  const specificSizeInput = document.createElement('input');
  specificSizeInput.type = 'number';
  specificSizeInput.value = '1.00';
  specificSizeInput.step = '0.01';
  specificSizeInput.classList.add('w-full', 'border', 'border-gray-300', 'rounded-md', 'p-2', 'pt-4');
  specificSizeInputContainer.appendChild(specificSizeLabel);
  specificSizeInputContainer.appendChild(specificSizeInput);

  
  const priceChangeInputContainer = document.createElement('div');
  priceChangeInputContainer.classList.add('w-1/3','mr-4','relative');
  const priceChangeLabel = document.createElement('label');
  priceChangeLabel.textContent = 'Price Change';
  priceChangeLabel.classList.add('absolute', '-top-3', 'left-5', 'bg-white');
  const priceChangeInput = document.createElement('input');
  priceChangeInput.type = 'number';
  priceChangeInput.value = '1.00';
  priceChangeInput.step = '0.01';
  priceChangeInput.classList.add('w-full', 'border', 'border-gray-300', 'rounded-md', 'p-2', 'pt-4');
  priceChangeInputContainer.appendChild(priceChangeLabel);
  priceChangeInputContainer.appendChild(priceChangeInput);

  
  const removeButtonContainer = document.createElement('div');
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.textContent = 'X';
  removeButton.classList.add('text-red-500', 'font-bold','remove-row', 'p-2');

  removeButton.addEventListener('click', function() {
    const row = removeButton.parentNode.parentNode;
    row.remove();
  });

  removeButtonContainer.appendChild(removeButton);

  
  newRow.appendChild(fontNameInputContainer);
  newRow.appendChild(fontSelectionDropdownContainer);
  newRow.appendChild(specificSizeInputContainer);
  newRow.appendChild(priceChangeInputContainer);
  newRow.appendChild(removeButtonContainer);

  
  fontRowsContainer.appendChild(newRow);
}


addRowButton.addEventListener('click', addRow);


const removeButtons = document.querySelectorAll('.remove-row');


removeButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const row = button.parentNode.parentNode;
    row.remove();
  });
});







function validateForm(event) {
  
  const fontRowsContainer = document.getElementById('fontRows');

  
  const fontSelectionDropdowns = fontRowsContainer.querySelectorAll('select');

  let fontCount = 0;
  let fontNames = '';
  fontSelectionDropdowns.forEach((dropdown, index) => {
    if (dropdown.value!== '' && dropdown.value!== 'Select a Font') {
      fontCount++;
      const fontNameInput = fontRowsContainer.querySelectorAll('input[type="text"]')[index];
      fontNames += fontNameInput.value + ', ';
    }
  });


  if (fontCount >= 2) {
    const groupTitleInput = document.querySelector('input[type="text"]');
    const groupTitle = groupTitleInput.value;
    const fontNamesTrimmed = fontNames.slice(0, -2); 
    const fontGroupsTable = document.getElementById('fontGroupsTable');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${groupTitle}</td>
      <td>${fontNamesTrimmed}</td>
      <td>${fontCount}</td>
      <td>
        <button class="text-blue-600">Edit</button>
        <button class="text-red-600 pl-3">Delete</button>
      </td>
    `;
    fontGroupsTable.innerHTML += newRow.outerHTML;
    event.preventDefault();
  } else {
    event.preventDefault();
    alert('Please select at least two fonts to create a group.');
  }
}

fontGroupForm.addEventListener('submit', validateForm);