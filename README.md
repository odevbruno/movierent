* UP DEV AMBIENT WITH DOCKER *

docker run --name postgres -e POSTGRES_USER=USERNAME -e POSTGRES_PASSWORD=PASSWORD -e POSTGRES_DB=DBNAME -p PORT:PORT -d postgres
docker run --name adminer -p PORT:PORT --link postgres:postgres -d adminer
