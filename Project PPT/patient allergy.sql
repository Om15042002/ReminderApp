create table patient(
    pk int NOT NULL GENERATED ALWAYS AS identity,
    patientid bigint GENERATED ALWAYS AS (fngetprimarykey(pk, clientid)) stored primary key,
    isactive bool default true,
    firstname varchar(20) not null,
    middlename varchar(20),
    lastname varchar(20) not null,
    sexid bigint not null,
    dob timestamp,
    chartnumber varchar(20) not null,
    createddate timestamp NOT NULL,
    createdbyid int4 NOT NULL,
    lastmodifieddate timestamp NOT NULL,
    lastmodifiedbyid int4 NOT NULL,
    clientid int2 NOT NULL,
    machineid varchar(40) NOT NULL,
    oldsystemid varchar(40) NULL,
    isdeleted bool NOT NULL DEFAULT false,
    issample bool NOT NULL DEFAULT false,
    requestid uuid NOT NULL DEFAULT uuid_generate_v1()
);

ALTER TABLE patient drop COLUMN chartnumber;
alter table patientallergy
add column chartnumber varchar
after isactive;

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----patient allergy type table----


create table allergy(
    pk int NOT NULL GENERATED ALWAYS AS identity,
    allergyid bigint GENERATED ALWAYS AS (fngetprimarykey(pk, clientid)) stored primary key,
    code varchar(20) not null,
    name varchar(20) not null,
    createddate timestamp NOT null default current_timestamp,
    createdbyid int4 NOT NULL,
    lastmodifieddate timestamp NOT null default current_timestamp,
    lastmodifiedbyid int4 NOT NULL,
    clientid int2 NOT NULL,
    machineid varchar(40) NOT NULL,
    oldsystemid varchar(40) NULL,
    isdeleted bool NOT NULL DEFAULT false,
    issample bool NOT NULL DEFAULT false,
    requestid uuid NOT NULL DEFAULT uuid_generate_v1()
);


insert into allergy (
        code,
        name,
        clientid,
        machineid,
        createdbyid,
        lastmodifiedbyid
    )
values(201, 'wheat', 10005, '::1', 1000750, 1000750),
    (202, 'egg', 10005, '::1', 1000750, 1000750),
    (203, 'milk', 10005, '::1', 1000750, 1000750),
    (204, 'latex', 10005, '::1', 1000750, 1000750),
    (205, 'morphine', 10005, '::1', 1000750, 1000750),
    (206, 'lactose', 10005, '::1', 1000750, 1000750);




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----patient allergy table----





create table patientallergy(
    pk int NOT NULL GENERATED ALWAYS AS identity,
    patientallergyid bigint GENERATED ALWAYS AS (fngetprimarykey(pk, clientid)) stored primary key,
    patientid int not null,
    allergyid bigint not null,
    code varchar(20),
    name varchar(200),
    note text,
    createddate timestamp NOT NULL,
    createdbyid int4 NOT NULL,
    lastmodifieddate timestamp NOT NULL,
    lastmodifiedbyid int4 NOT NULL,
    clientid int2 NOT NULL,
    machineid varchar(40) NOT NULL,
    oldsystemid varchar(40) NULL,
    isdeleted bool NOT NULL DEFAULT false,
    issample bool NOT NULL DEFAULT false,
    requestid uuid NOT NULL DEFAULT uuid_generate_v1(),
    foreign key (allergyid) references allergy(allergyid),
    foreign key (patientid) references patient(patientid)
);