run:
    docker run -it  -p 3000:3000 --rm -v pages:/pages  react-image
stop:
		docker stop