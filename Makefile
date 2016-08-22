all: build clean
build: install 
	docker build -t nohaapav/napp .
install:
	docker run --rm -v ${PWD}:/app -w /app iron/node:dev npm install
clean:
	rm -rf node_modules
