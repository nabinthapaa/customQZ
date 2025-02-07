.PHONY: start_docker 
start_docker: 
	docker compose -f docker-compose-build.yaml up --build 

.PHONY: stop_docker
stop_docker:
	docker compose -f docker-compose-build.yaml  down
