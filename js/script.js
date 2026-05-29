document.querySelector('.formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:1000';

    const caixa = document.createElement('div');
    caixa.style.cssText = 'background:#fff;border-radius:12px;padding:32px 24px;text-align:center;max-width:280px;width:90%';

    const msg = document.createElement('p');
    msg.textContent = 'Publicação enviada com sucesso';
    msg.style.cssText = 'font-family:Inter,sans-serif;font-size:16px;margin-bottom:20px';

    const btn = document.createElement('button');
    btn.textContent = 'OK';
    btn.style.cssText = 'font-family:Inter,sans-serif;font-size:14px;font-weight:700;background:#000;color:#fff;border:none;border-radius:8px;padding:10px 32px;cursor:pointer';
    btn.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    caixa.appendChild(msg);
    caixa.appendChild(btn);
    overlay.appendChild(caixa);
    document.body.appendChild(overlay);
});
