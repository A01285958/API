import pg from "pg"


const config = {
    user: "avnadmin",
    password: "AVNS__acU-cdaXyDBFGcakh3",
    host: "pg-19701323-tec-fc5f.g.aivencloud.com",
    port: 14422,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUYegofCI+cc6kEsZQqxhovHJx5MowDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvOWZlM2M5MTEtNmYzNy00MjljLWIzNmMtMzU0ZDNhYTAz
MmJjIFByb2plY3QgQ0EwHhcNMjQxMTA2MTkzMDIxWhcNMzQxMTA0MTkzMDIxWjA6
MTgwNgYDVQQDDC85ZmUzYzkxMS02ZjM3LTQyOWMtYjM2Yy0zNTRkM2FhMDMyYmMg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAI+T1bpU
isXEjXB5G2rCFjNRKRXnHAQEwrSu+jFgW/bptmTuHMY6wyRO+52SjUKKeuw4H1wK
mXY/MUp3P9pwsHnZtfo4JRrzU9+xJokFS8KZefcrxamL0mVu6KMA5lQsAhLGHMKV
NYJoOBddqxfsmtD1NFVGIodhCBgjPmSFbg/LHFFR5ZOYPXKeuYSXtfmWZG6Md1NF
64+w3xypgLQa6Vi9WxNkKjqDg1eSTOJhH6PhVCUihiaq/ZUoib2nud9xz3i8H1vv
8a3pxr82f48+keqXfH9mcwDvOVhTRwkKx7f6P99L955h+ptl+gLZ7gKMca5dyxqC
/hijaEwHAey/kPIPt5jApjKEynytG8De07qR+3lL7KqIJ58Zz9KBc3akHGRwX8lx
yBDaGqFlqfhXCXfWTuAb/G7MK4BkKyiRWK/XChvQLIePZw73ikb4rvf1JfBojCsW
IKd13Z9gfKdCWHF/hJHmHu/Netx+fG/kpJ5i+7LqUxBkBPo3o9Au4WZYiwIDAQAB
oz8wPTAdBgNVHQ4EFgQUxDP30xoUSaHUWAPGUdl1/b+D8ecwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGeXt96N4HIeE1hQ
P49BJJVe8JHHjzKYull9Jhp1SPzLNfh5CNVjXPWAqIJuhVwJidOC/6U7mCZ2bhlL
l3TJdJZKw9P7ETW3V1wdl1rHu8oS0Y/ufdjp9TAV4rmqmRYA4dd0/R0CkEe89OXI
k5WRxHx2loKGi9V61Bavy7rgZqdsDqCgGaZqXw7g8Fav6+0OHMJ1VHspzm+D84s6
YIKTyEdSAMiVwe95bAEoPVtC2cNPI9Tx/ySzWSrp1qXiBY4s3QHmE1caRhDSHPtq
XexPybjchHJ32+/edi3BqDy8vZXZq8pBh3ESfaT+4F9RVBbs5lQa3UqTiuZkdGX4
ImRgsVASKvhfdtNqAFmRLMcNA2VBGvjhMPabvOjw4RoKAvSdDv+y3uI3IWNFdXxl
eb4hFsCVQ4SE25agRtdqpf4otXQ+/IdCzM8Vxeq3fqLcY90ghMQPTLObUJBpLQ1l
KKd5HD9wPSpuio65dxQ2aK498D1+BxmsgI3TXJ41u7oLn7lHJg==
-----END CERTIFICATE-----`,
    },
};
export const connectBD = () => {
  const client = new pg.Client(config);
  client.connect();
  return client;
};
