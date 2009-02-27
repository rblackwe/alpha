#!/usr/local/bin/perl -w
use CGI;          
use Net::Nslookup;
use CGI::Carp qw(fatalsToBrowser);
#use Net::Whois;
my $q = new CGI;

print $q->header('text/plain');
print is_Pair_hosted( $q->param('x') );

sub is_Pair_hosted {
    my $domain_name = shift; 
    $domain_name =~ s/www\.//;  # Strip out the 'www.' from the domain name
    my $result = undef;
    
    if ( whois_it( get_ip ( $domain_name ) )  =~ /pair Networks/ ) {
        $result = 'pair';
    }
    if ( whois_it( $domain_name ) =~ /Registrar: PAIRNIC/ ) {
        $result = ($result =~ /pair/) ? 'both' : 'pairnic';
    }
    return $result || 'no';
} 

sub whois_it {
    my $dom = shift;
    return `whois $dom`;
}

sub get_ip {
    my $domain = shift;
    my $a  = nslookup(host => "$domain", type => "A");
    return $a;
}
