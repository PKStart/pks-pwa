#!/bin/bash

rm -rf ./tmp/
mkdir tmp
curl -L https://github.com/KinPeter/PK-Start/archive/refs/heads/develop.tar.gz -o ./tmp/common.tar.gz
tar -xzf ./tmp/common.tar.gz -C ./tmp/
rm -rf ./src/pk-start-common/*
cp -r ./tmp/PK-Start-develop/libs/common/enums/ ./src/pk-start-common/
cp -r ./tmp/PK-Start-develop/libs/common/types/ ./src/pk-start-common/
cp -r ./tmp/PK-Start-develop/libs/common/utils/ ./src/pk-start-common/
cp -r ./tmp/PK-Start-develop/libs/common/index.ts ./src/pk-start-common/
rm -rf ./tmp/
echo -e "\nPK-Start Common lib has been updated."
