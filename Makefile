# Variables
SRC_DIR := src
DIST_DIR := dist
SERVER_FILE := server.js
TS_CONFIG := tsconfig.json
ENV := -r dotenv/config

# Targets
.PHONY: all clean build serve watch dev

all: build serve

clean:
	@echo "Cleaning up..."
	@npm run clean

build:
	@echo "Building TypeScript files..."
	@npm run build

serve:
	@echo "Starting server..."
	@npm run serve

watch:
	@echo "Watching TypeScript files..."
	@npm run watch

dev:
	@echo "Starting development server..."
	@npm run dev

.PHONY: watch

