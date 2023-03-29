--Stage #0.0 Drop users tables
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS computer;
DROP TABLE IF EXISTS componentList;

--Stage #0.1 Drop subdata tables
DROP TABLE IF EXISTS cpuSocketList;
DROP TABLE IF EXISTS frontPanelUSBList;
DROP TABLE IF EXISTS motherboardFormFactorList;
DROP TABLE IF EXISTS sliCrossFireList;

--Stage #0.2 Drop data tables
DROP TABLE IF EXISTS pricing;

DROP TABLE IF EXISTS cases;
DROP TABLE IF EXISTS cpu;
DROP TABLE IF EXISTS cpucooler;
DROP TABLE IF EXISTS memory;
DROP TABLE IF EXISTS motherboard;
DROP TABLE IF EXISTS powersupply;
DROP TABLE IF EXISTS storages;
DROP TABLE IF EXISTS videocard;
DROP TABLE IF EXISTS pidRegistry;



--Stage #0.1 Drop code tables
DROP TABLE IF EXISTS bearingCodes;
DROP TABLE IF EXISTS chipsetCodes;
DROP TABLE IF EXISTS colorCodes;
DROP TABLE IF EXISTS coreFamilyCodes;
DROP TABLE IF EXISTS cpuSocketCodes;
DROP TABLE IF EXISTS eccRegisteredCodes;
DROP TABLE IF EXISTS efficiencyRatingCodes;
DROP TABLE IF EXISTS externalPowerCodes;
DROP TABLE IF EXISTS formFactorCodes;
DROP TABLE IF EXISTS frameSyncCodes;
DROP TABLE IF EXISTS frontPanelUSBCodes;
DROP TABLE IF EXISTS integratedGraphicsCodes;
DROP TABLE IF EXISTS interfaceCodes;
DROP TABLE IF EXISTS manufacturerCodes;
DROP TABLE IF EXISTS memoryTypeCodes;
DROP TABLE IF EXISTS microarchitectureCodes;
DROP TABLE IF EXISTS modularCodes;
DROP TABLE IF EXISTS motherboardFormFactorCodes;
DROP TABLE IF EXISTS packagingCodes;
DROP TABLE IF EXISTS seriesCodes;
DROP TABLE IF EXISTS sidePanelWindowCodes;
DROP TABLE IF EXISTS sliCrossFireCodes;
DROP TABLE IF EXISTS socketCodes;
DROP TABLE IF EXISTS typeCodes;

DROP TABLE IF EXISTS availabilityCodes;
DROP TABLE IF EXISTS merchantCodes;

--Stage #1 Build code tables

CREATE TABLE bearingCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE chipsetCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE colorCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE coreFamilyCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE cpuSocketCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE eccRegisteredCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE efficiencyRatingCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE externalPowerCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE formFactorCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE frameSyncCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE frontPanelUSBCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE integratedGraphicsCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE interfaceCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE manufacturerCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE memoryTypeCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE microarchitectureCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE modularCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE motherboardFormFactorCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE packagingCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE seriesCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE sidePanelWindowCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE sliCrossFireCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE socketCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE typeCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE availabilityCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE merchantCodes (
	ID SERIAL NOT NULL,
	Dictionary text NOT NULL,
	PRIMARY KEY (ID)
);

--Stage #2 Build data tables

CREATE TABLE cases (
	PID integer NOT NULL,
	type integer,
	powerSupply integer,
	sidePanelWindow integer,
	powerSupplyShroud boolean,
	fullHeightExpansionSlots integer,
	halfHeightExpansionSlots integer,
	internal25Bays integer,
	internal35Bays integer,
	maxGraphicsCardLength float,
	maxGraphicsCardLengthNoDriveBay integer,
	length float,
	width float,
	height float,
	external525Bays integer,
	external35Bays integer,
	external525SlimSlotLoadBays integer,
	external25Bays integer,
	external525SlimBays integer,
	internal525Bays integer,
	internal525SlimSlotLoadBays integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_type
		FOREIGN KEY(type)
			REFERENCES typeCodes(ID),
	CONSTRAINT fk_sidePanelWindow
		FOREIGN KEY(sidePanelWindow)
			REFERENCES sidePanelWindowCodes(ID)
);

CREATE TABLE cpu (
	PID integer NOT NULL,
	coreCount integer,
	coreClock integer,
	boostClock integer,
	tdp integer,
	series integer,
	microarchitecture integer,
	coreFamily integer,
	socket integer,
	maximumSupportedMemory integer,
	eccSupport boolean,
	packaging integer,
	includesCPUCooler boolean,
	l1cache text,
	l2cache text,
	l3cache text,
	lithography integer,
	simultaneousMultithreading boolean,
	integratedGraphics integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_series
		FOREIGN KEY(series)
			REFERENCES seriesCodes(ID),
	CONSTRAINT fk_microarchitecture
		FOREIGN KEY(microarchitecture)
			REFERENCES microarchitectureCodes(ID),
	CONSTRAINT fk_coreFamily
		FOREIGN KEY(coreFamily)
			REFERENCES coreFamilyCodes(ID),
	CONSTRAINT fk_socket
		FOREIGN KEY(socket)
			REFERENCES socketCodes(ID),
	CONSTRAINT fk_packaging
		FOREIGN KEY(packaging)
			REFERENCES packagingCodes(ID),
	CONSTRAINT fk_integratedGraphics
		FOREIGN KEY(integratedGraphics)
			REFERENCES integratedGraphicsCodes(ID)
);

CREATE TABLE cpucooler (
	PID integer NOT NULL,
	height float,
	fanless boolean,
	fanRPMMin integer,
	fanRPMMax integer,
	noiseLevelMin float,
	noiseLevelMax float,
	bearing integer,
	waterCoolerRadiator integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_bearing
		FOREIGN KEY(bearing)
			REFERENCES bearingCodes(ID)
);

CREATE TABLE memory (
	PID integer NOT NULL,
	formFactor integer,
	modules integer,
	pricePerGB float,
	firstWordLatency float,
	voltage float,
	eccRegistered integer,
	heatSpreader boolean,
	memoryType integer,
	memorySpeed integer,
	capacity integer,
	cl integer,
	tRCD integer,
	tRP integer,
	tRAS integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_formFactor
		FOREIGN KEY(formFactor)
			REFERENCES formFactorCodes(ID),
	CONSTRAINT fk_eccRegistered
		FOREIGN KEY(eccRegistered)
			REFERENCES eccRegisteredCodes(ID),
	CONSTRAINT fk_memoryType
		FOREIGN KEY(memoryType)
			REFERENCES memoryTypeCodes(ID)
);

CREATE TABLE motherboard (
	PID integer NOT NULL,
	chipset integer,
	memoryMax integer,
	memoryType integer,
	memorySlots integer,
	pciEx16Slots integer,
	pciEx8Slots integer,
	pciEx4Slots integer,
	pciEx1Slots integer,
	pciSlots integer,
	m2Slots text,
	miniPCIe integer,
	halfMiniPCIeSlots integer,
	miniPCIemSATASlots integer,
	mSATASlots integer,
	onboardEthernet text,
	sata6gb integer,
	onboardVideo text,
	usb20Headers integer,
	usb20HeadersSinglePort integer,
	usb30Gen1Headers integer,
	usb32Gen1Headers integer,
	usb32Gen2x2Headers integer,
	supportsECC boolean,
	wirelessNetworking text,
	raidSupport boolean,
	memorySpeedMin integer,
	memorySpeedMax integer,
	socket integer,
	motherboardFormFactor integer,
	pata100 integer,
	sata3gb integer,
	u2 integer,
	pata133 integer,
	sas12gb integer,
	sas3gb integer,
	sas6gb integer,
	sata15 integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_chipset
		FOREIGN KEY(chipset)
			REFERENCES chipsetCodes(ID),
	CONSTRAINT fk_memoryType
		FOREIGN KEY(memoryType)
			REFERENCES memoryTypeCodes(ID),
	CONSTRAINT fk_socket
		FOREIGN KEY(socket)
			REFERENCES socketCodes(ID),
	CONSTRAINT fk_motherboardFormFactor
		FOREIGN KEY(motherboardFormFactor)
			REFERENCES motherboardFormFactorCodes(ID)
);

CREATE TABLE pidRegistry (
	PID SERIAL NOT NULL,
	productType text,
	productName text,
	manufacturer integer,
	partNumber text,
	color integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_manufacturer
		FOREIGN KEY(manufacturer)
			REFERENCES manufacturerCodes(ID),
	CONSTRAINT fk_color
		FOREIGN KEY(color)
			REFERENCES colorCodes(ID)
);

CREATE TABLE powerSupply (
	PID integer NOT NULL,
	formFactor integer,
	efficiencyRating integer,
	wattage integer,
	length integer,
	modular integer,
	type integer,
	fanless boolean,
	atxConnectors integer,
	epsConnectors integer,
	pcie12PinConnectors integer,
	pcie8PinConnectors integer,
	pcie62PinConnectors integer,
	pcie6PinConnectors integer,
	sataConnectors integer,
	molex4PinConnectors integer,
	output text,
	efficiency text,
	PRIMARY KEY (PID),
	CONSTRAINT fk_formFactor
		FOREIGN KEY(formFactor)
			REFERENCES formFactorCodes(ID),
	CONSTRAINT fk_efficiencyRating
		FOREIGN KEY(efficiencyRating)
			REFERENCES formFactorCodes(ID),
	CONSTRAINT fk_modular
		FOREIGN KEY(modular)
			REFERENCES modularCodes(ID),
	CONSTRAINT fk_type
		FOREIGN KEY(type)
			REFERENCES typeCodes(ID)
);

CREATE TABLE storages (
	PID integer NOT NULL,
	capacity float,
	pricePerGB float,
	type text,
	cache integer,
	formFactor text,
	interface text,
	nvme boolean,
	ssdNANDFlashType text,
	hybridSSDCache text,
	ssdController text,
	powerLossProtection boolean,
	PRIMARY KEY (PID)
);

CREATE TABLE videocard (
	PID integer NOT NULL,
	chipset integer,
	memory float,
	memoryType integer,
	coreClock integer,
	boostClock integer,
	effectiveMemoryClock integer,
	interface integer,
	frameSync integer,
	length float,
	tdp integer,
	dviPorts integer,
	hdmiPorts integer,
	miniHdmiPorts integer,
	displayPortPorts integer,
	miniDisplayPortPorts integer,
	expansionSlotWidth integer,
	cooling integer,
	externalPower integer,
	displayPort integer,
	hdmi integer,
	dviDDualLink integer,
	vga integer,
	dviIDualLink integer,
	virtualLink integer,
	dviDSingleLink integer,
	dvi integer,
	miniDisplayPort integer,
	miniHDMI integer,
	sVideo integer,
	vhdci integer,
	dviISingleLink integer,
	dviA integer,
	PRIMARY KEY (PID),
	CONSTRAINT fk_chipset
		FOREIGN KEY(chipset)
			REFERENCES chipsetCodes(ID),
	CONSTRAINT fk_memoryType
		FOREIGN KEY(memoryType)
			REFERENCES memoryTypeCodes(ID),
	CONSTRAINT fk_interface
		FOREIGN KEY(interface)
			REFERENCES interfaceCodes(ID),
	CONSTRAINT fk_frameSync
		FOREIGN KEY(frameSync)
			REFERENCES frameSyncCodes(ID)
);
--Stage #3 Create subdata tables

CREATE TABLE cpuSocketList (
	PID integer NOT NULL,
	ID integer NOT NULL,
	PRIMARY KEY (PID, ID),
	CONSTRAINT fk_PID
		FOREIGN KEY(PID)
			REFERENCES pidRegistry(PID),
	CONSTRAINT fk_ID
		FOREIGN KEY(ID)
			REFERENCES socketCodes(ID)
);

CREATE TABLE frontPanelUSBList (
	PID integer NOT NULL,
	ID integer NOT NULL,
	PRIMARY KEY (PID, ID),
	CONSTRAINT fk_PID
		FOREIGN KEY(PID)
			REFERENCES pidRegistry(PID),
	CONSTRAINT fk_ID
		FOREIGN KEY(ID)
			REFERENCES frontPanelUSBCodes(ID)
);

CREATE TABLE motherboardFormFactorList (
	PID integer NOT NULL,
	ID integer NOT NULL,
	PRIMARY KEY (PID, ID),
	CONSTRAINT fk_PID
		FOREIGN KEY(PID)
			REFERENCES pidRegistry(PID),
	CONSTRAINT fk_ID
		FOREIGN KEY(ID)
			REFERENCES socketCodes(ID)
);

CREATE TABLE sliCrossFireList (
	PID integer NOT NULL,
	ID integer NOT NULL,
	PRIMARY KEY (PID, ID),
	CONSTRAINT fk_PID
		FOREIGN KEY(PID)
			REFERENCES pidRegistry(PID),
	CONSTRAINT fk_ID
		FOREIGN KEY(ID)
			REFERENCES sliCrossFireCodes(ID)
);

CREATE TABLE pricing (
	PID integer NOT NULL,
	merchant integer,
	availability integer,
	total float,
	PRIMARY KEY (PID, merchant),
	CONSTRAINT fk_PID
		FOREIGN KEY(PID)
			REFERENCES pidRegistry(PID),
	CONSTRAINT fk_merchant
		FOREIGN KEY(merchant)
			REFERENCES merchantCodes(ID),
	CONSTRAINT fk_availability
		FOREIGN KEY(availability)
			REFERENCES availabilityCodes(ID)
);

--Stage #3.5 Create User and Shopping Cart
CREATE TABLE users (
	UID SERIAL NOT NULL,
	email text NOT NULL,
	password text NOT NULL,
	username text NOT NULL,
	isAdmin boolean NOT NULL,
	PRIMARY KEY(UID)
);

CREATE TABLE computer (
	computer_id SERIAL NOT NULL,
	UID integer NOT NULL,
	PRIMARY KEY (computer_id, UID)
);

CREATE TABLE componentList (
	computer_id integer NOT NULL,
	PID integer NOT NULL,
	merchant integer,
	count integer NOT NULL,
	PRIMARY KEY (computer_id, PID)
);

--Stage #4 Populate code tables
COPY bearingCodes
FROM 'C:/PC_csv_data/1-code-csv/bearingCodes.csv'
DELIMITER ','
CSV HEADER;

COPY chipsetCodes
FROM 'C:/PC_csv_data/1-code-csv/chipsetCodes.csv'
DELIMITER ','
CSV HEADER;

COPY colorCodes
FROM 'C:/PC_csv_data/1-code-csv/colorCodes.csv'
DELIMITER ','
CSV HEADER;

COPY coreFamilyCodes
FROM 'C:/PC_csv_data/1-code-csv/coreFamilyCodes.csv'
DELIMITER ','
CSV HEADER;

COPY cpuSocketCodes
FROM 'C:/PC_csv_data/1-code-csv/cpuSocketCodes.csv'
DELIMITER ','
CSV HEADER;

COPY eccRegisteredCodes
FROM 'C:/PC_csv_data/1-code-csv/eccRegisteredCodes.csv'
DELIMITER ','
CSV HEADER;

COPY efficiencyRatingCodes
FROM 'C:/PC_csv_data/1-code-csv/efficiencyRatingCodes.csv'
DELIMITER ','
CSV HEADER;

COPY externalPowerCodes
FROM 'C:/PC_csv_data/1-code-csv/externalPowerCodes.csv'
DELIMITER ','
CSV HEADER;

COPY formFactorCodes
FROM 'C:/PC_csv_data/1-code-csv/formFactorCodes.csv'
DELIMITER ','
CSV HEADER;

COPY frameSyncCodes
FROM 'C:/PC_csv_data/1-code-csv/frameSyncCodes.csv'
DELIMITER ','
CSV HEADER;

COPY frontPanelUSBCodes
FROM 'C:/PC_csv_data/1-code-csv/frontPanelUSBCodes.csv'
DELIMITER ','
CSV HEADER;

COPY integratedGraphicsCodes
FROM 'C:/PC_csv_data/1-code-csv/integratedGraphicsCodes.csv'
DELIMITER ','
CSV HEADER;

COPY interfaceCodes
FROM 'C:/PC_csv_data/1-code-csv/interfaceCodes.csv'
DELIMITER ','
CSV HEADER;

COPY manufacturerCodes
FROM 'C:/PC_csv_data/1-code-csv/manufacturerCodes.csv'
DELIMITER ','
CSV HEADER;

COPY memoryTypeCodes
FROM 'C:/PC_csv_data/1-code-csv/memoryTypeCodes.csv'
DELIMITER ','
CSV HEADER;

COPY microarchitectureCodes
FROM 'C:/PC_csv_data/1-code-csv/microarchitectureCodes.csv'
DELIMITER ','
CSV HEADER;

COPY modularCodes
FROM 'C:/PC_csv_data/1-code-csv/modularCodes.csv'
DELIMITER ','
CSV HEADER;

COPY motherboardFormFactorCodes
FROM 'C:/PC_csv_data/1-code-csv/motherboardFormFactorCodes.csv'
DELIMITER ','
CSV HEADER;

COPY packagingCodes
FROM 'C:/PC_csv_data/1-code-csv/packagingCodes.csv'
DELIMITER ','
CSV HEADER;

COPY seriesCodes
FROM 'C:/PC_csv_data/1-code-csv/seriesCodes.csv'
DELIMITER ','
CSV HEADER;

COPY sidePanelWindowCodes
FROM 'C:/PC_csv_data/1-code-csv/sidePanelWindowCodes.csv'
DELIMITER ','
CSV HEADER;

COPY sliCrossFireCodes
FROM 'C:/PC_csv_data/1-code-csv/sliCrossFireCodes.csv'
DELIMITER ','
CSV HEADER;

COPY socketCodes
FROM 'C:/PC_csv_data/1-code-csv/socketCodes.csv'
DELIMITER ','
CSV HEADER;

COPY typeCodes
FROM 'C:/PC_csv_data/1-code-csv/typeCodes.csv'
DELIMITER ','
CSV HEADER;

COPY availabilityCodes
FROM 'C:/PC_csv_data/1-code-csv/availabilityCodes.csv'
DELIMITER ','
CSV HEADER;

COPY merchantCodes
FROM 'C:/PC_csv_data/1-code-csv/merchantCodes.csv'
DELIMITER ','
CSV HEADER;

--Stage #5 Populate data tables
COPY cases
from 'C:/PC_csv_data/2-data-csv/case.csv'
DELIMITER ','
CSV HEADER;

COPY cpu
from 'C:/PC_csv_data/2-data-csv/cpu.csv'
DELIMITER ','
CSV HEADER;

COPY cpucooler
from 'C:/PC_csv_data/2-data-csv/cpucooler.csv'
DELIMITER ','
CSV HEADER;

COPY memory
from 'C:/PC_csv_data/2-data-csv/memory.csv'
DELIMITER ','
CSV HEADER;

COPY motherboard
from 'C:/PC_csv_data/2-data-csv/motherboard.csv'
DELIMITER ','
CSV HEADER;

COPY pidRegistry
from 'C:/PC_csv_data/2-data-csv/pidRegistry.csv'
DELIMITER ','
CSV HEADER;

COPY powerSupply
from 'C:/PC_csv_data/2-data-csv/powersupply.csv'
DELIMITER ','
CSV HEADER;

COPY storages
from 'C:/PC_csv_data/2-data-csv/storage.csv'
DELIMITER ','
CSV HEADER;

COPY videocard
from 'C:/PC_csv_data/2-data-csv/videocard.csv'
DELIMITER ','
CSV HEADER;

COPY pricing
from 'C:/PC_csv_data/2-data-csv/pricing.csv'
DELIMITER ','
CSV HEADER;

--Stage #6 Populate subdata tables
COPY cpuSocketList
from 'C:/PC_csv_data/3-subdata-csv/cpuSocketList.csv'
DELIMITER ','
CSV HEADER;

COPY frontPanelUSBList
from 'C:/PC_csv_data/3-subdata-csv/frontPanelUSBList.csv'
DELIMITER ','
CSV HEADER;

--Temp table created since duplicates are in scraped data
CREATE TABLE motherboardFormFactorListTemp (
	PID integer NOT NULL,
	ID integer NOT NULL
);

COPY motherboardFormFactorListTemp
from 'C:/PC_csv_data/3-subdata-csv/motherboardFormFactorList.csv'
DELIMITER ','
CSV HEADER;

INSERT INTO motherboardFormFactorList
SELECT DISTINCT ON (PID, ID) * FROM motherboardFormFactorListTemp;
DROP TABLE motherboardFormFactorListTemp;
--

COPY sliCrossFireList
from 'C:/PC_csv_data/3-subdata-csv/sliCrossFireList.csv'
DELIMITER ','
CSV HEADER;

SELECT setval('availabilitycodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM availabilitycodes), 1), false);
SELECT setval('bearingcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM bearingcodes), 1), false);
SELECT setval('chipsetcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM chipsetcodes), 1), false);
SELECT setval('colorcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM colorcodes), 1), false);
SELECT setval('computer_computer_id_seq', COALESCE((SELECT MAX(computer_id)+1 FROM computer), 1), false);
SELECT setval('corefamilycodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM corefamilycodes), 1), false);
SELECT setval('cpusocketcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM cpusocketcodes), 1), false);
SELECT setval('eccregisteredcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM eccregisteredcodes), 1), false);
SELECT setval('efficiencyratingcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM efficiencyratingcodes), 1), false);
SELECT setval('externalpowercodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM externalpowercodes), 1), false);
SELECT setval('formfactorcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM formfactorcodes), 1), false);
SELECT setval('framesynccodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM framesynccodes), 1), false);
SELECT setval('frontpanelusbcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM frontpanelusbcodes), 1), false);
SELECT setval('integratedgraphicscodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM integratedgraphicscodes), 1), false);
SELECT setval('interfacecodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM interfacecodes), 1), false);
SELECT setval('manufacturercodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM manufacturercodes), 1), false);
SELECT setval('memorytypecodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM memorytypecodes), 1), false);
SELECT setval('merchantcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM merchantcodes), 1), false);
SELECT setval('microarchitecturecodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM microarchitecturecodes), 1), false);
SELECT setval('modularcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM modularcodes), 1), false);
SELECT setval('motherboardformfactorcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM motherboardformfactorcodes), 1), false);
SELECT setval('packagingcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM packagingcodes), 1), false);
SELECT setval('pidregistry_pid_seq', COALESCE((SELECT MAX(pid)+1 FROM pidregistry), 1), false);
SELECT setval('seriescodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM seriescodes), 1), false);
SELECT setval('sidepanelwindowcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM sidepanelwindowcodes), 1), false);
SELECT setval('slicrossfirecodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM slicrossfirecodes), 1), false);
SELECT setval('socketcodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM socketcodes), 1), false);
SELECT setval('typecodes_id_seq', COALESCE((SELECT MAX(id)+1 FROM typecodes), 1), false);
SELECT setval('users_uid_seq', COALESCE((SELECT MAX(uid)+1 FROM users), 1), false);
