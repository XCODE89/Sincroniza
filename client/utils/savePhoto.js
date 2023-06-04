//! conectar cuando haya la ruta en la funcion savePicture de useCamera aun no subir a github

const savePhotoToBackend = async (photoUri) => {
    try {
        const formData = new FormData();
        formData.append('photo', {
        uri: photoUri,
        type: 'image/jpeg', // Reemplaza con el tipo de imagen correcto
        name: 'photo.jpg', // Reemplaza con el nombre de archivo deseado
      });
  
      // Realiza una solicitud POST al endpoint de tu backend para guardar la foto
      const response = await fetch('https://tu-backend.com/api/savePhoto', {
        method: 'POST',
        body: formData,
      });
  
      // Verifica si la respuesta del backend fue exitosa
      if (response.ok) {
        console.log('Foto guardada en el backend');
      } else {
        console.log('Error al guardar la foto en el backend');
      }
    } catch (error) {
      console.log('Error al enviar la foto al backend:', error);
    }
  };
  
  // Dentro de la función takePicture()
  const takePicture = async () => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setPhoto(data.uri);
      setPhotoModal(true);
      savePhotoToMediaLibrary(data.uri);
      savePhotoToBackend(data.uri); // Envía la foto al backend
    }
  };
  