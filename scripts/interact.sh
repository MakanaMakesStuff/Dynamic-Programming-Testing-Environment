#!/usr/bin/env bash

SOURCE_DIR="./src"

# Make sure jest is installed
if ! command -v jest &> /dev/null; then
  echo "jest not found. Install it with 'npm install -g jest' or in your project."
  exit 1
fi

# Get all subfolders in SOURCE_DIR
folders=()
while IFS= read -r -d $'\0' dir; do
  folders+=("$(basename "$dir")")
done < <(find "$SOURCE_DIR" -mindepth 1 -maxdepth 1 -type d -print0)

# Check if there are folders
if [ ${#folders[@]} -eq 0 ]; then
  echo "No folders found in $SOURCE_DIR."
  exit 1
fi

# Display folders with indexes
echo "Select a folder to run tests:"
for i in "${!folders[@]}"; do
  printf "%d) %s\n" "$i" "${folders[$i]}"
done

# Read user selection
read -p "Enter folder index: " idx

# Validate input
if ! [[ "$idx" =~ ^[0-9]+$ ]] || [ "$idx" -ge "${#folders[@]}" ]; then
  echo "Invalid index."
  exit 1
fi

selected="${folders[$idx]}"
TEST_FILE="$SOURCE_DIR/$selected/index.test.ts"

# Check if the test file exists
if [ ! -f "$TEST_FILE" ]; then
  echo "No index.test.ts file found in $SOURCE_DIR/$selected"
  exit 1
fi

echo "Running Jest on $TEST_FILE..."

# Run Jest on that specific test file
jest "$TEST_FILE"
