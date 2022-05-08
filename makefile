run:
    docker run -it  -p 3000:3000 --rm -v test2:./:/usr/src/app/ react-image
stop:
		docker stop