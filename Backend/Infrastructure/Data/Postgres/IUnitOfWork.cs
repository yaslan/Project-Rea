﻿using Infrastructure.Data.Postgres.Repositories.Interface;

namespace Infrastructure.Data.Postgres;

public interface IUnitOfWork : IDisposable
{
    IUserRepository Users { get; }
    IUserTokenRepository UserTokens { get; }
    IAccountRepository Accounts { get; }
    ITransactionRepository Transactions { get; }

    Task<int> CommitAsync();
}