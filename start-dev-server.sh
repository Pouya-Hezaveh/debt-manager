sudo lsof -i :3000 -i :3001 | awk '{print $2}' | xargs kill -9; npm run --prefix . start & npm run --prefix ./client start

