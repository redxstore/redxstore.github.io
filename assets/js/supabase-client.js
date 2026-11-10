(() => {
  const projectUrl = 'https://szeuvmdntbysyxotvwgg.supabase.co';
  const publishableKey = 'sb_publishable_2to_1KQnU1jtpPFNsm5CSA_y3pcmjGD';

  if (!window.supabase?.createClient) {
    console.error('Supabase SDK gagal dimuat. Periksa koneksi internet lalu muat ulang halaman.');
    return;
  }

  window.rdxSupabaseClient = window.supabase.createClient(projectUrl, publishableKey);
})();
