--Demo queries



--Show a list of all motherboards with resolved code names
SELECT PR.pid, PR.productname, MC.dictionary, PR.partnumber, 
CC.dictionary, CSC.dictionary, MR.memorymax, MTC.dictionary,
MR.memoryslots, MR.pciex16slots, MR.pciex8slots, MR.pciex4slots,
MR.pciex1slots, MR.pcislots, MR.m2slots, MR.minipcie,
MR.halfminipcieslots, MR.minipciemsataslots, MR.msataslots,
MR.onboardethernet, MR.sata6gb, MR.onboardvideo, MR.usb20headers,
MR.usb30gen1headers, MR.usb32gen1headers, MR.usb32gen2x2headers,
MR.supportsecc, MR.wirelessnetworking, MR.raidsupport,
MR.memoryspeedmin, MR.memoryspeedmax, SC.dictionary, MFFC.dictionary,
MR.pata100, MR.sata3gb, MR.u2, MR.pata133, MR.sas12gb,
MR.sas3gb, MR.sas6gb, MR.sata15
FROM pidRegistry PR
INNER JOIN motherboard MR
ON (PR.PID = MR.PID)
LEFT JOIN manufacturerCodes MC
ON (PR.manufacturer = MC.ID)
LEFT JOIN colorCodes CC
ON (PR.color = CC.ID)
LEFT JOIN chipsetCodes CSC
ON (MR.chipset = CSC.ID)
LEFT JOIN memoryTypeCodes MTC
ON (MR.memoryType = MTC.ID)
LEFT JOIN socketCodes SC
ON (MR.socket = SC.ID)
LEFT JOIN motherboardFormFactorCodes MFFC
ON (MR.motherboardFormFactor = MFFC.ID);

--Show all compatible processor tuples for a motherboard by name
SELECT PRC.productName, CR.*
FROM motherboard MR
INNER JOIN cpu CR
ON (MR.socket = CR.socket)
INNER JOIN socketCodes SC
ON (SC.ID = MR.socket)
INNER JOIN pidRegistry PRM
ON (PRM.PID = MR.PID)
INNER JOIN pidRegistry PRC
ON (PRC.PID = CR.PID)
WHERE PRM.productName = 'Asus ROG Strix X570-E Gaming ATX AM4 Motherboard (ROG Strix X570-E Gaming)';

--Get largest PID number
SELECT MAX(pid)
FROM pidRegistry;

--Get largest chipset code
SELECT MAX(id)
FROM chipsetCodes;

--Get largest socket code
SELECT MAX(id)
FROM socketCodes;

--Get largest motherboardFormFactor code
SELECT MAX(id)
FROM motherboardFormFactorCodes;

--Insert a new motherboard into motherboards table
INSERT INTO motherboard(pid, chipset, socket, motherboardformfactor)
VALUES(29753,436, 64, 11);

--Get largest manufacturer code
SELECT MAX(id)
FROM manufacturerCodes;

--Get largest color code
SELECT MAX(id)
FROM colorCodes;

--Insert a new motherboard into the pidRegistry table
INSERT INTO pidRegistry(pid, productType, productName, manufacturer, partNumber, color)
VALUES(29753, 'Motherboard', 'ASU 412 HyperGamer', 275, 'CSE GAMING 4** WIFI', 97);

--Update this record to be a different productName
UPDATE pidRegistry
SET productName = 'UofA HypoGamer'
WHERE pid = 29753;

--Find the record tuple
SELECT *
FROM pidRegistry
WHERE pid = 29753;