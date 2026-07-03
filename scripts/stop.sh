#!/bin/bash

echo "Stopping Flask application..."

pkill -f app.py || true