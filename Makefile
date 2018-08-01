source="$(PWD)/source"

default:
	docker rm -f rance ||:
	docker run -d --restart always --name rance -p 9000:8080 -v $(source):/usr/share/nginx/html:ro nginx
