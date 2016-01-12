# Color helpers
C_CYAN=\x1b[34;01m
C_RESET=\x1b[0m

# Run all linters
lint: jshint jscs

# Lint JavaScript
jshint:
	@echo "$(C_CYAN)> linting javascript$(C_RESET)"
	@./node_modules/.bin/jshint .

# Run JavaScript Code Style
jscs:
	@echo "$(C_CYAN)> checking javascript code style$(C_RESET)"
	@./node_modules/.bin/jscs .