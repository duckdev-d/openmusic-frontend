# React client for [OpenMusic API](https://github.com/duckdev-d/openmusic-backend)

### Main functionality includes:
* Playing songs
* Searching for songs
* Registration, signing up
* Managing favourite songs


## Some screenshots of the app:

![Screenshot from 2025-04-21 07-37-22](https://github.com/user-attachments/assets/75450a1e-ce57-483a-9edf-f5a138544831)
![Screenshot from 2025-04-21 07-34-31](https://github.com/user-attachments/assets/c694f855-c8fd-4e1c-9833-df1053cfc2b7)


## How to run the app
> [!NOTE]
> You have to have docker and docker compose installed

> [!WARNING]
> You have to run the [API](https://github.com/duckdev-d/openmusic-backend) and set environment variables first

### Linux
* Set essential environment variables
  * Create .env file in the root directory (same level as compose.yaml)
  * Set all the variables listed in .env.example in .env
    
* Run the container
  ```bash
  docker build -t openmusic-frontend-image .
  docker run -p 80:80 openmusic-frontend-image

* Visit ```localhost:80``` in your browser
