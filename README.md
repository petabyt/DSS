# DeepSkyStacker

Continuation of [michalsc's work](https://github.com/michalsc/DSS) on porting DSS to cmake and Qt.

Compiling DeepSkyStacker on Linux:  
Clone repo with `--recursive-submodules`.
Libraries (Ubuntu/Debian): `sudo apt install qttools5-dev libtiff5-dev qt5-default qtbase5-dev-tools`  
```
# Compile cfitsio
cd cfitsio
sh configure
make

cd ..
cmake .
```

The code is open source under the terms of the BSD 3-Clause License (see LICENSE).

Copyright (c) 2006-2019, LucCoiffier 
Copyright (c) 2018-2019, David C. Partridge, Tony Cook, Mat Draper,
					Simon C. Smith, Vitali Pelenjow

