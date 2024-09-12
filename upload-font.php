<?php
if (isset($_FILES['font_file'])) {
  if ($_FILES['font_file']['error'] === 0) {
    $fileName = $_FILES['font_file']['name'];
    $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);

    
    if ($fileExt === 'ttf') {
      $uploadDir = 'uploads/';
      $filePath = $uploadDir . $fileName;

      
      if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
      }

      if (move_uploaded_file($_FILES['font_file']['tmp_name'], $filePath)) {
        echo json_encode(['success' => true, 'file' => $fileName]);
      } else {
        echo json_encode(['success' => false, 'error' => 'Unable to move the file to uploads directory']);
      }
    } else {
      echo json_encode(['success' => false, 'error' => 'Invalid file type']);
    }
  } else {
    echo json_encode(['success' => false, 'error' => 'Error uploading file: ' . $_FILES['font_file']['error']]);
  }
} else {
  echo json_encode(['success' => false, 'error' => 'No file uploaded']);
}
?>
