https://github.com/btholt/projects-for-complete-intro-to-containers
https://github.com/btholt/complete-intro-to-containers

```bash
docker build -t my-node-app .

docker inspect my-node-app

docker run --init --rm -p 3000:3000 -it my-node-app whoami


```

Creating Dockerfile
```bash
docker build -t test-react-app .

docker run -p 8080:80 test-react-app
``` 
