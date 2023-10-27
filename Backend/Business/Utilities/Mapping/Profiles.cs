using Business.Models.Request.Create;
using Business.Models.Request.Functional;
using Business.Models.Request.Update;
using Business.Models.Response;
using Infrastructure.Data.Postgres.Entities;

namespace Business.Utilities.Mapping;

public class Profiles : AutoMapper.Profile
{
    public Profiles()
    {
        CreateMap<User, RegisterDto>().ReverseMap();
        CreateMap<User, UserUpdateDto>().ReverseMap();
        CreateMap<User, UserProfileDto>().ReverseMap();

        CreateMap<Account, AccountCreateDto>().ReverseMap();
        CreateMap<Account, AccountUpdateDto>().ReverseMap();
        CreateMap<Account, AccountInfoDto>().ReverseMap();

        CreateMap<Transaction, TransactionCreateDto>().ReverseMap();
        CreateMap<Transaction, TransactionUpdateDto>().ReverseMap();
        CreateMap<Transaction, TransactionInfoDto>().ReverseMap();
    }
}