#
# Makefile
#
# zip: adds source code to a tar file
# setup: runs all setup commands (assume no venv)
#

all: clean
.PHONY: clean zip setup
clean:
	cd frontend && $(MAKE) clean
	cd backend && $(MAKE) clean
	rm -rf *.tar

zip: clean
	tar cvf todo.tar frontend backend Makefile

setup: clean
	cd backend && ./manage.py makemigrations && \
	./manage.py migrate && ./manage.py loaddata todo.json
	cd frontend && npm install